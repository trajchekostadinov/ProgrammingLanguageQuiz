import { reactive } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.js'

export const authState = reactive({
  user: null,
  ready: false,
})

onAuthStateChanged(auth, (u) => {
  authState.user = u
  authState.ready = true
})
