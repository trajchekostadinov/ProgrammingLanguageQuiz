

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAy2sXnjtomRn0PPyDF3RE2Uei4jScFd0s',
  authDomain: 'quiz-app-e17bd.firebaseapp.com',
  projectId: 'quiz-app-e17bd',
  storageBucket: 'quiz-app-e17bd.firebasestorage.app',
  messagingSenderId: '442943529642',
  appId: '1:442943529642:web:a3ef99be280e4aa1df26d3',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
