<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase.js'
import { ensureUserDoc } from '../composables/useUserData.js'

const router = useRouter()
const email = ref('')
const password = ref('')
const mode = ref('login') // 'login' | 'register'
const error = ref('')
const loading = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    let cred
    if (mode.value === 'login') {
      cred = await signInWithEmailAndPassword(auth, email.value, password.value)
    } else {
      cred = await createUserWithEmailAndPassword(auth, email.value, password.value)
    }
    await ensureUserDoc(cred.user.uid)
    router.push({ name: 'select' })
  } catch (e) {
    error.value = mapError(e.code)
  } finally {
    loading.value = false
  }
}

function mapError(code) {
  const map = {
    'auth/invalid-email': 'Невалидна е-пошта.',
    'auth/user-not-found': 'Корисникот не постои.',
    'auth/wrong-password': 'Погрешна лозинка.',
    'auth/email-already-in-use': 'Оваа е-пошта веќе е регистрирана.',
    'auth/weak-password': 'Лозинката мора да има барем 6 карактери.',
    'auth/invalid-credential': 'Погрешни податоци за најава.',
  }
  return map[code] || 'Се случи грешка. Обиди се повторно.'
}
</script>

<template>
  <div class="page" style="max-width: 420px; margin-top: 4rem;">
    <div class="card">
      <h2>КодКвиз 👨‍💻</h2>
      <p class="dim">Учи програмски јазици низ прашања, нивоа и поени.</p>

      <form @submit.prevent="submit" style="display:flex; flex-direction:column; gap:.8rem; margin-top:1rem;">
        <input v-model="email" type="email" placeholder="Е-пошта" required />
        <input v-model="password" type="password" placeholder="Лозинка" required minlength="6" />
        <p v-if="error" class="error-text">{{ error }}</p>
        <button class="btn" type="submit" :disabled="loading">
          {{ mode === 'login' ? 'Најави се' : 'Регистрирај се' }}
        </button>
      </form>

      <p class="dim" style="margin-top:1rem;">
        <span v-if="mode === 'login'">
          Немаш профил?
          <button class="link" style="color:var(--accent-2); background:none; border:none; cursor:pointer;" @click="mode = 'register'">Регистрирај се</button>
        </span>
        <span v-else>
          Веќе имаш профил?
          <button class="link" style="color:var(--accent-2); background:none; border:none; cursor:pointer;" @click="mode = 'login'">Најави се</button>
        </span>
      </p>
    </div>
  </div>
</template>
