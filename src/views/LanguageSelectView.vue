<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { LANGUAGES } from '../data/questions.js'
import { authState } from '../stores/authStore.js'
import { getUnlockedLevel } from '../composables/useUserData.js'
import { useProgrammingFact } from '../composables/useProgrammingFact.js'

const router = useRouter()
const { fact, loading, fetchFact } = useProgrammingFact()
const unlocked = ref({}) // { javascript: 1, python: 2 }

onMounted(async () => {
  fetchFact()
  for (const lang of LANGUAGES) {
    unlocked.value[lang.id] = await getUnlockedLevel(authState.user.uid, lang.id)
  }
})

function goToQuiz(languageId) {
  const level = unlocked.value[languageId] || 1
  router.push({ name: 'quiz', params: { language: languageId, level } })
}
</script>

<template>
  <div class="page">
    <h1>Избери програмски јазик</h1>
    <p class="dim">Одговарај на прашања, отклучувај нови нивоа и собирај поени за џокери.</p>

    <div class="card" style="margin: 1.25rem 0; border-color: var(--accent-2);">
      <span class="badge">🌐 Надворешен API факт</span>
      <p style="margin-top:.6rem;" v-if="loading">Се вчитува факт...</p>
      <p style="margin-top:.6rem;" v-else>{{ fact }}</p>
      <button class="btn secondary" style="margin-top:.5rem;" @click="fetchFact" :disabled="loading">
        Нов факт
      </button>
    </div>

    <div class="grid cols-2">
      <div
        v-for="lang in LANGUAGES"
        :key="lang.id"
        class="card"
        style="cursor:pointer;"
        @click="goToQuiz(lang.id)"
      >
        <div style="display:flex; align-items:center; gap:.75rem;">
          <div :style="{
            background: lang.color, color: '#111', width: '42px', height: '42px',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontFamily: 'var(--font-mono)'
          }">{{ lang.icon }}</div>
          <div>
            <h3 style="margin:0;">{{ lang.name }}</h3>
            <span class="dim">Отклучено ниво: {{ unlocked[lang.id] || 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
