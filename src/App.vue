<script setup>
import { signOut } from 'firebase/auth'
import { auth } from './firebase.js'
import { authState } from './stores/authStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

async function logout() {
  await signOut(auth)
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="navbar" v-if="authState.user">
    <div class="brand">Код<span>Квиз</span></div>
    <nav>
      <router-link :to="{ name: 'select' }">Јазици</router-link>
      <router-link :to="{ name: 'scoreboard' }">Резултати</router-link>
      <button class="link" @click="logout">Одјава</button>
    </nav>
  </header>
  <router-view />
</template>
