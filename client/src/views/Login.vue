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
      showMessage: false,
      message: '',
    }
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)

        this.$router.push({
          path: '/Home',
          query: { message: 'Registration successful!' },
        })
      } catch (error) {
        this.message = error.message
        this.showMessage = true

        setTimeout(() => {
          this.showMessage = false
        }, 2000)
      }
    },
    async login() {
      try {
        const userDetails = await signInWithEmailAndPassword(auth, this.email, this.password)

        this.$router.push({
          path: '/Home',
          query: { message: 'Successfully logged in!' },
        })
      } catch (error) {
        this.message = error.message
        this.showMessage = true

        setTimeout(() => {
          this.showMessage = false
        }, 2000)
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

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #00e403;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  opacity: 0;
  animation: fadeInOut 5s forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
