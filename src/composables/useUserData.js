import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore'
import { db } from '../firebase.js'

const DEFAULT_PROGRESS = { totalScore: 0, jokerPoints: 0, progress: {} }

export async function ensureUserDoc(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) {
    await setDoc(ref, DEFAULT_PROGRESS)
    return { id: uid, ...DEFAULT_PROGRESS }
  }
  return { id: uid, ...snap.data() }
}

export async function getUnlockedLevel(uid, languageId) {
  const userData = await ensureUserDoc(uid)
  return userData.progress?.[languageId]?.unlockedLevel ?? 1
}

export async function saveAttempt(uid, { language, level, score, correctCount, totalQuestions }) {
  // 1) зачувај го обидот во под-колекција
  await addDoc(collection(db, 'users', uid, 'attempts'), {
    language,
    level,
    score,
    correctCount,
    totalQuestions,
    timestamp: Date.now(),
  })

  // 2) ажурирај вкупен score, joker поени и отклучено ниво
  const userData = await ensureUserDoc(uid)
  const currentUnlocked = userData.progress?.[language]?.unlockedLevel ?? 1
  const newUnlocked = correctCount === totalQuestions ? Math.max(currentUnlocked, level + 1) : currentUnlocked

  const updatedProgress = {
    ...userData.progress,
    [language]: { unlockedLevel: newUnlocked },
  }

  await updateDoc(doc(db, 'users', uid), {
    totalScore: (userData.totalScore || 0) + score,
    jokerPoints: (userData.jokerPoints || 0) + score, // поените од квизот се и joker-валута
    progress: updatedProgress,
  })
}

export async function spendJokerPoints(uid, amount) {
  const userData = await ensureUserDoc(uid)
  const current = userData.jokerPoints || 0
  if (current < amount) return false
  await updateDoc(doc(db, 'users', uid), { jokerPoints: current - amount })
  return true
}

export async function getAttempts(uid) {
  const q = query(collection(db, 'users', uid, 'attempts'), orderBy('timestamp', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}
export async function getGlobalAttempts() {
  const q = query(
    collection(db, 'globalAttempts'),
    orderBy('timestamp', 'desc')
  )

  const snap = await getDocs(q)

  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }))
}