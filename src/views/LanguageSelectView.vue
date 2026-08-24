<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { LANGUAGES } from '../data/questions.js'
import { authState } from '../stores/authStore.js'
import { getUnlockedLevel } from '../composables/useUserData.js'

const router = useRouter()
const unlocked = ref({})

onMounted(async () => {
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

    <!-- Floating coding elements -->
    <div class="floating-code code-1">&lt;/&gt;</div>
    <div class="floating-code code-2">{ }</div>
    <div class="floating-code code-3">;</div>
    <div class="floating-code code-4">&lt;div&gt;</div>
    <div class="floating-code code-5">01</div>
    <div class="floating-code code-6">&lt;code&gt;</div>
    <div class="floating-code code-7">JS</div>

    <!-- Small sticker -->
    <div class="code-sticker">
      <div class="sticker-icon">&lt;/&gt;</div>
      <div>
        <strong>CODE</strong>
        <span>QUIZ</span>
      </div>
    </div>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow"></div>

      <div class="terminal-tag">
        <span class="terminal-dot"></span>
        READY_TO_CODE
      </div>

      <h1>
        Избери програмски
        <span>јазик</span>
      </h1>

      <p class="subtitle">
        Тестирај го твоето досегашно познавање на програмските јазици
        <br />
        и научи нешто ново
      </p>

      <div class="code-line">
        <span class="blue">&lt;</span>
        <span class="white">/</span>
        <span class="blue">&gt;</span>
      </div>
    </section>

    <!-- Languages -->
    <div class="section-header">
      <div>
        <h2>Програмски јазици</h2>
        <p class="dim">Избери јазик и започни го квизот.</p>
      </div>

      <div class="levels-info">
        <span class="levels-dot"></span>
        Нивоата се отклучуваат постепено
      </div>
    </div>

    <div class="grid cols-2">
      <div
        v-for="lang in LANGUAGES"
        :key="lang.id"
        class="language-card"
        @click="goToQuiz(lang.id)"
      >
        <div class="card-shine"></div>

        <div class="language-top">
          <div
            class="language-icon"
            :style="{
              background: lang.color,
              color: '#111'
            }"
          >
            {{ lang.icon }}
          </div>

          <div class="arrow">
            →
          </div>
        </div>

        <div class="language-info">
          <h3>{{ lang.name }}</h3>

          <div class="level-row">
            <span class="dim">Отклучено ниво</span>

            <span class="level-badge">
              LVL {{ unlocked[lang.id] || 1 }}
            </span>
          </div>
        </div>

        <div class="progress-line">
          <div
            class="progress-fill"
            :style="{
              width: `${Math.min((unlocked[lang.id] || 1) * 12, 100)}%`
            }"
          ></div>
        </div>

        <div class="start-text">
          Започни квиз
          <span>→</span>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>

/* =========================
   PAGE
========================= */

.page {
 
  min-height: 100vh;
  overflow: hidden;
  padding: 70px 8% 100px;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(70, 130, 180, 0.25),
      transparent 40%
    ),
    linear-gradient(
      135deg,
      #101722 0%,
      #111c2a 45%,
      #0b111a 100%
    );

  color: #f4f7fb;
}

/* =========================
   HERO
========================= */

.hero {
  position: relative;
  text-align: center;
  max-width: 850px;
  margin: 0 auto 70px;
  z-index: 2;
}

.terminal-tag {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 8px 16px;
  border-radius: 30px;

  background: rgba(70, 130, 180, 0.12);
  border: 1px solid rgba(100, 170, 230, 0.25);

  color: #82bfff;
  font-family: monospace;
  font-size: 12px;
  letter-spacing: 2px;

  box-shadow: 0 0 25px rgba(70, 130, 180, 0.12);
}

.terminal-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #55d98b;

  box-shadow: 0 0 12px #55d98b;
}

.hero h1 {
  margin: 25px 0 15px;

  font-size: clamp(38px, 5vw, 65px);
  line-height: 1.05;

  font-weight: 800;
  letter-spacing: -2px;
}

.hero h1 span {
  color: #69aeea;

  text-shadow:
    0 0 20px rgba(70, 160, 240, 0.35);
}

.subtitle {
  color: #aeb9c8;
  font-size: 17px;
  line-height: 1.7;
}

.code-line {
  margin-top: 25px;

  font-family: monospace;
  font-size: 15px;

  color: #9ba9bb;
}

.blue {
  color: #65b5ff;
}

.white {
  color: #ffffff;
}

/* =========================
   STICKER
========================= */

.code-sticker {
  position: absolute;

  top: 90px;
  right: 7%;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;

  background: #dcecff;
  color: #152235;

  border-radius: 10px;

  transform: rotate(7deg);

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(90, 160, 230, 0.15);

  animation: stickerFloat 4s ease-in-out infinite;

  z-index: 5;
}

.sticker-icon {
  font-family: monospace;
  font-weight: 900;
  font-size: 20px;
  color: #367db9;
}

.code-sticker strong {
  display: block;
  font-size: 12px;
  letter-spacing: 2px;
}

.code-sticker span {
  display: block;
  font-size: 10px;
  letter-spacing: 3px;
  color: #52718f;
}

@keyframes stickerFloat {
  0%, 100% {
    transform: rotate(7deg) translateY(0);
  }

  50% {
    transform: rotate(4deg) translateY(-8px);
  }
}

/* =========================
   SECTION HEADER
========================= */

.section-header {
  position: relative;
  z-index: 2;

  width: 100%;
  margin-bottom: 22px;

  display: flex;
  justify-content: space-between;
  align-items: end;
}


.section-header h2 {
  margin: 0;
  font-size: 25px;
}

.section-header p {
  margin-top: 5px;
}

.levels-info {
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 12px;
  color: #7f8fa3;
}

.levels-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: #65b5ff;

  box-shadow: 0 0 10px #65b5ff;
}

/* =========================
   GRID
========================= */
.grid {
  position: relative;
  z-index: 2;

  width: 100%;
  margin: 0;

  display: grid;
  gap: 20px;
}

.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

/* =========================
   LANGUAGE CARD
========================= */

.language-card {
  position: relative;
  overflow: hidden;

  padding: 25px;

  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(38, 54, 72, 0.9),
      rgba(20, 30, 43, 0.95)
    );

  border: 1px solid rgba(120, 170, 220, 0.15);

  cursor: pointer;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.18);
}

.language-card:hover {
  transform: translateY(-7px);

  border-color: rgba(100, 180, 255, 0.5);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.35),
    0 0 25px rgba(60, 140, 210, 0.12);
}

.card-shine {
  position: absolute;

  width: 180px;
  height: 180px;

  top: -100px;
  right: -80px;

  border-radius: 50%;

  background: rgba(80, 170, 255, 0.08);

  filter: blur(10px);

  transition: 0.4s ease;
}

.language-card:hover .card-shine {
  transform: scale(1.5);
}

/* =========================
   CARD CONTENT
========================= */

.language-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language-icon {
  width: 55px;
  height: 55px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;
  font-family: monospace;
  font-size: 18px;

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.2);
}

.arrow {
  font-size: 25px;
  color: #647b92;

  transition: 0.25s ease;
}

.language-card:hover .arrow {
  color: #6ebcff;
  transform: translateX(6px);
}

.language-info {
  margin-top: 22px;
}

.language-info h3 {
  margin: 0 0 12px;

  font-size: 22px;
}

.level-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.level-badge {
  padding: 5px 10px;

  border-radius: 7px;

  background: rgba(70, 150, 220, 0.12);
  border: 1px solid rgba(80, 160, 230, 0.2);

  color: #74bcf5;

  font-family: monospace;
  font-size: 11px;
  font-weight: bold;
}

/* =========================
   PROGRESS
========================= */

.progress-line {
  height: 4px;

  margin-top: 20px;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.06);

  overflow: hidden;
}

.progress-fill {
  height: 100%;

  border-radius: 10px;

  background: linear-gradient(
    90deg,
    #3979ad,
    #70c3ff
  );

  box-shadow:
    0 0 10px rgba(80, 180, 255, 0.5);

  transition: width 0.5s ease;
}

.start-text {
  display: flex;
  justify-content: space-between;

  margin-top: 18px;

  font-size: 13px;
  color: #8295aa;

  font-family: monospace;
}

.start-text span {
  color: #65b5ff;

  transition: 0.2s ease;
}

.language-card:hover .start-text span {
  transform: translateX(5px);
}

/* =========================
   FLOATING CODE
========================= */

.floating-code {
  position: absolute;

  font-family: monospace;
  font-weight: bold;

  color: rgba(95, 175, 240, 0.12);

  pointer-events: none;

  user-select: none;

  animation: floating 6s ease-in-out infinite;
}

.code-1 {
  top: 18%;
  left: 5%;
  font-size: 50px;
}

.code-2 {
  top: 45%;
  right: 4%;
  font-size: 55px;
  animation-delay: 1s;
}

.code-3 {
  top: 72%;
  left: 7%;
  font-size: 65px;
  animation-delay: 2s;
}

.code-4 {
  top: 30%;
  right: 8%;
  font-size: 18px;
  animation-delay: 3s;
}

.code-5 {
  top: 80%;
  right: 10%;
  font-size: 40px;
  animation-delay: 1.5s;
}

.code-6 {
  top: 60%;
  left: 3%;
  font-size: 18px;
  animation-delay: 2.5s;
}

.code-7 {
  top: 12%;
  left: 25%;
  font-size: 25px;
  animation-delay: 3.5s;
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-18px) rotate(4deg);
  }
}

/* =========================
   BOTTOM CODE
========================= */

.bottom-code {
  position: relative;

  max-width: 600px;
  margin: 70px auto 0;

  text-align: center;

  font-family: monospace;
  font-size: 13px;

  color: #63768b;

  opacity: 0.7;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {

  .page {
    padding: 50px 20px 80px;
  }

  .cols-2 {
    grid-template-columns: 1fr;
  }

  .section-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .code-sticker {
    display: none;
  }

  .floating-code {
    opacity: 0.5;
  }

}
</style>