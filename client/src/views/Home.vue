<script setup></script>
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
  <div id="container">
    <div id="header">
      <div>
        <h1>Programming Language Quizzes</h1>
      </div>
      <router-link to="/login">
        <div id="buttons">
          <button id="sign">Sign in</button>
          <button id="sign">Register</button>
        </div>
      </router-link>
      <div v-if="showMessage" class="notification">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#buttons {
  margin-left: 940px;
  margin-top: -38px;
}
h1 {
  -webkit-text-stroke-color: #4682b4;
  font-weight: bold;
  font-size: 48px;
  -webkit-text-stroke-width: 2px;
}
#sign {
  color: #616161;
  height: 40px;
  width: 90px;
  background-color: #a7c7e7;
  border-radius: 28px;
  font-weight: bold;
  padding: 5px;
  border: 2px solid #4682b4;
  margin-right: 30px;
}
body {
  width: 100%;
  height: 100%;
}
#sign:hover {
  background-color: #79a3c5;
}
#header {
  width: 100%;
  height: 85px;
  background-color: #a7c7e7;
}
#header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
}

h1 {
  color: #5479bc;
  font-weight: bold;
  font-size: 35px;
  font-family: 'Electrolize', sans-serif;
  text-align: center;
  margin-left: 30px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
#container {
  margin: -7px;
  min-height: calc(100vh - 10px);
  box-sizing: border-box;
  padding: 0;
  height: 100%;
  background-color: #282c34;
}

.notification {
  position: fixed;
  top: 30px;
  right: 20px;
  width: 200px;
  height: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 16px;
  //border: 2px solid green;
  background: #90ee90;
  color: white;
  padding: 15px 15px 15px 15px;
  border-radius: 19px;
  opacity: 0;
  animation: fadeInOut 2s forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateZ(-20px);
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
    transform: translateX(-20px);
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMessage: false,
      message: '',
    }
  },

  mounted() {
    if (this.$route.query.message) {
      this.message = this.$route.query.message
      this.showMessage = true

      setTimeout(() => {
        this.showMessage = false
      }, 2000)
    }
  },
}
</script>
