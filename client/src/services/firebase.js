import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase config од Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyDpd66HQkQUAdcHyLB5iuYDEXMbaRMEZ4E',
  authDomain: 'programminglanguagequiz.firebaseapp.com',
  projectId: 'programminglanguagequiz',
  storageBucket: 'programminglanguagequiz.firebasestorage.app',
  messagingSenderId: '1074268069183',
  appId: '1:1074268069183:web:358cc5fd3e7c4a3681c78a',
}
// Иницијализирај Firebase
const app = initializeApp(firebaseConfig)

// Services
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
