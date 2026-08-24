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
    <div class="brand" @click="router.push('/select')">Код Квиз</div>
    <nav>
      <router-link :to="{ name: 'select' }">Квиз</router-link>
      <router-link :to="{ name: 'scoreboard' }">Резултати</router-link>
      <button class="link" @click="logout">Одјави се</button>
    </nav>
  </header>
  <router-view />
</template>

<style>
  .brand {
  cursor: pointer;
  transition: color 0.2s ease;
}

.brand:hover {
  color: #4682b4;
}
</style>
