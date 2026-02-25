<template>
  <div>
    <h1>Login</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="login">Login</button>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import { auth } from '../services/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        alert('User registered: ' + userCredential.user.email)
      } catch (error) {
        alert(error.message)
      }
    },
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        alert('Logged in: ' + userCredential.user.email)
      } catch (error) {
        alert(error.message)
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}

input {
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #aaa;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #bfbfbf;
}
</style>
