<script setup>
import { ref, onMounted } from 'vue'
import { authState } from '../stores/authStore.js'
import { ensureUserDoc, getAttempts } from '../composables/useUserData.js'
import { LANGUAGES } from '../data/questions.js'

const totalScore = ref(0)
const jokerPoints = ref(0)
const attempts = ref([])
const loading = ref(true)

function langName(id) {
  return LANGUAGES.find((l) => l.id === id)?.name || id
}
function formatDate(ts) {
  return new Date(ts).toLocaleString('mk-MK')
}

onMounted(async () => {
  const userData = await ensureUserDoc(authState.user.uid)
  totalScore.value = userData.totalScore || 0
  jokerPoints.value = userData.jokerPoints || 0
  attempts.value = await getAttempts(authState.user.uid)
  loading.value = false
})
</script>

<template>
  <div class="page">
    <h1>Твои резултати</h1>

    <div class="grid cols-2" style="margin: 1.25rem 0;">
      <div class="card">
        <span class="dim">Вкупно поени</span>
        <h2 style="color: var(--accent-2);">{{ totalScore }}</h2>
      </div>
      <div class="card">
        <span class="dim">Достапни џокер поени</span>
        <h2 style="color: var(--warn);">{{ jokerPoints }}</h2>
      </div>
    </div>

    <div class="card">
      <h3>Претходни обиди</h3>
      <p v-if="loading" class="dim">Се вчитува...</p>
      <p v-else-if="attempts.length === 0" class="dim">Сè уште немаш завршено ниту еден квиз.</p>
      <table v-else>
        <thead>
          <tr>
            <th>Јазик</th>
            <th>Ниво</th>
            <th>Резултат</th>
            <th>Точни</th>
            <th>Датум</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in attempts" :key="a.id">
            <td>{{ langName(a.language) }}</td>
            <td>{{ a.level }}</td>
            <td>{{ a.score }}</td>
            <td>{{ a.correctCount }}/{{ a.totalQuestions }}</td>
            <td class="dim">{{ formatDate(a.timestamp) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
