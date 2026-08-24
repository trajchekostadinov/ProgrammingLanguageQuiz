<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  QUESTIONS,
  LANGUAGES,
  TIME_PER_QUESTION,
  POINTS_CORRECT,
  JOKER_COST,
} from '../data/questions.js'
import { useTimer } from '../composables/useTimer.js'
import { authState } from '../stores/authStore.js'
import {
  saveAttempt,
  spendJokerPoints,
  ensureUserDoc,
} from '../composables/useUserData.js'

const props = defineProps({
  language: String,
  level: Number,
})

const router = useRouter()

const langInfo = LANGUAGES.find((l) => l.id === props.language)
const levelQuestions = QUESTIONS[props.language]?.[props.level - 1] || []

const currentIndex = ref(0)
const selectedOption = ref(null)
const answered = ref(false)
const correctCount = ref(0)
const attemptScore = ref(0)
const jokerRevealed = ref(false)
const jokerPointsAvailable = ref(0)
const finished = ref(false)

let nextQuestionTimeout = null

const currentQuestion = computed(() => levelQuestions[currentIndex.value])

const progressPct = computed(() => {
  if (!levelQuestions.length) return 0
  return ((currentIndex.value) / levelQuestions.length) * 100
})

const {
  timeLeft,
  start: startTimer,
  stop: stopTimer,
} = useTimer(TIME_PER_QUESTION, handleExpire)

const timerPct = computed(() => {
  return (timeLeft.value / TIME_PER_QUESTION) * 100
})

onMounted(async () => {
  const userData = await ensureUserDoc(authState.user.uid)

  jokerPointsAvailable.value = userData.jokerPoints || 0

  startTimer()
})

onUnmounted(() => {
  stopTimer()

  if (nextQuestionTimeout) {
    clearTimeout(nextQuestionTimeout)
  }
})

function handleExpire() {
  if (finished.value) return

  if (!answered.value) {
    answered.value = true
    selectedOption.value = -1

    nextQuestionTimeout = setTimeout(() => {
      nextQuestion()
    }, 1200)
  }
}

function selectOption(idx) {
  if (answered.value || finished.value) return

  stopTimer()

  answered.value = true
  selectedOption.value = idx

  if (
    idx === currentQuestion.value.correct &&
    !jokerRevealed.value
  ) {
    correctCount.value++
    attemptScore.value += POINTS_CORRECT
  }

  nextQuestionTimeout = setTimeout(() => {
    nextQuestion()
  }, 1200)
}

async function useJoker() {
  if (jokerRevealed.value || answered.value || finished.value) return

  const ok = await spendJokerPoints(
    authState.user.uid,
    JOKER_COST
  )

  if (!ok) return

  jokerPointsAvailable.value -= JOKER_COST
  jokerRevealed.value = true
}

function optionClass(idx) {
  if (!answered.value && !jokerRevealed.value) return ''

  if (idx === currentQuestion.value.correct) {
    return 'correct'
  }

  if (
    idx === selectedOption.value &&
    idx !== currentQuestion.value.correct
  ) {
    return 'wrong'
  }

  return ''
}

async function nextQuestion() {
  if (finished.value) return

  if (currentIndex.value + 1 < levelQuestions.length) {
    currentIndex.value++

    answered.value = false
    selectedOption.value = null
    jokerRevealed.value = false

    startTimer()
  } else {
    await finishQuiz()
  }
}

async function finishQuiz() {
  if (finished.value) return

  stopTimer()

  if (nextQuestionTimeout) {
    clearTimeout(nextQuestionTimeout)
    nextQuestionTimeout = null
  }

  finished.value = true

  await saveAttempt(authState.user.uid, {
  email: authState.user.email,
  language: props.language,
  level: props.level,
  score: attemptScore.value,
  correctCount: correctCount.value,
  totalQuestions: levelQuestions.length,
})
}

function goToNextLevel() {
  router.push({
    name: 'quiz',
    params: {
      language: props.language,
      level: props.level + 1,
    },
  })
}

function backToSelect() {
  router.push({
    name: 'select',
  })
}
</script>

<template>
  <div class="page">

    <!-- HEADER -->
    <div
      style="
        display:flex;
        justify-content:space-between;
        align-items:center;
      "
    >
      <h2 style="margin:0;">
        {{ langInfo?.name }} — Ниво {{ level }}
      </h2>

      <span class="badge">
        🃏 Џокер поени: {{ jokerPointsAvailable }}
      </span>
    </div>

    <!-- ACTIVE QUIZ -->
    <template v-if="!finished && currentQuestion">

      <!-- QUESTION PROGRESS -->
      <div class="timer-bar-track">
        <div
          class="timer-bar-fill"
          :style="{ width: progressPct + '%' }"
        ></div>
      </div>

      <!-- QUESTION CARD -->
      <div
        class="card"
        style="margin-top:1rem;"
      >

        <!-- QUESTION HEADER -->
        <div
          style="
            display:flex;
            justify-content:space-between;
            align-items:center;
          "
        >

          <span class="badge">
            Прашање {{ currentIndex + 1 }}/{{ levelQuestions.length }}
            · {{ currentQuestion.difficulty }}
          </span>

          <span
            class="mono"
            :style="{
              color:
                timeLeft <= 5
                  ? 'var(--danger)'
                  : 'var(--text-dim)'
            }"
          >
            ⏱ {{ timeLeft }}s
          </span>

        </div>

        <!-- QUESTION TIMER -->
        <div class="timer-bar-track">

          <div
            class="timer-bar-fill"
            :style="{
              width: timerPct + '%',
              background:
                timeLeft <= 5
                  ? 'var(--danger)'
                  : undefined
            }"
          ></div>

        </div>

        <!-- QUESTION -->
        <h3 style="margin-top:1rem;">
          {{ currentQuestion.q }}
        </h3>

        <!-- ANSWERS -->
        <div style="margin-top:1rem;">

          <button
            v-for="(opt, idx) in currentQuestion.options"
            :key="idx"
            class="option-btn"
            :class="optionClass(idx)"
            :disabled="answered || jokerRevealed"
            @click="selectOption(idx)"
          >
            {{ opt }}
          </button>

        </div>

        <!-- JOKER -->
        <button
          class="btn warn"
          style="margin-top:.5rem;"
          :disabled="
            answered ||
            jokerRevealed ||
            jokerPointsAvailable < 30
          "
          @click="useJoker"
        >
          🃏 Искористи џокер (-30 поени)
          — прикажи точен одговор
        </button>

      </div>

      <!-- FINISH QUIZ BUTTON -->
      <div
        style="
          display:flex;
          justify-content:center;
          margin-top:1.5rem;
        "
      >
        <button
          class="btn finish-btn"
          @click="finishQuiz"
        >
          ✓ Заврши квиз
        </button>
      </div>

    </template>

    <!-- FINISHED -->
    <div
      v-else-if="finished"
      class="card"
      style="
        margin-top:1rem;
        text-align:center;
      "
    >

      <h2>
        Ниво завршено! 🎉
      </h2>

      <p class="dim">
        Точни одговори:
        {{ correctCount }}/{{ levelQuestions.length }}
      </p>

      <p
        style="
          font-size:1.5rem;
          font-weight:700;
          color:var(--accent-2);
        "
      >
        +{{ attemptScore }} поени
      </p>

      <p
        v-if="correctCount === levelQuestions.length"
        style="color:var(--success);"
      >
        Одлично! Го отклучи следното ниво.
      </p>

      <p
        v-else
        class="dim"
      >
        Одговори точно на сите прашања
        за да го отклучиш следното ниво.
      </p>

      <div
        style="
          display:flex;
          gap:.75rem;
          justify-content:center;
          margin-top:1rem;
        "
      >

        <button
          v-if="
            correctCount === levelQuestions.length &&
            QUESTIONS[language]?.[level]
          "
          class="btn"
          @click="goToNextLevel"
        >
          Продолжи на ниво {{ level + 1 }} →
        </button>

        <button
          class="btn secondary"
          @click="backToSelect"
        >
          Назад кон јазици
        </button>

      </div>

    </div>

  </div>
</template>

<style scoped>
.finish-btn {
  background: transparent;
  border: 1px solid var(--danger);
  color: var(--danger);
  transition: all 0.2s ease;
}

.finish-btn:hover {
  background: var(--danger);
  color: white;
  transform: translateY(-2px);
}
</style>