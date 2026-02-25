<script setup></script>
<template>
  <div>
    <h1>Home Page</h1>
  </div>
  <router-link to="/login">
    <button>Sign in or Register</button>
  </router-link>
</template>


<style scoped>
button{
  color: black;
  background-color: darkseagreen;
  border-radius: 3px;
  padding: 5px;
}
button:hover{
  background-color: gray;
}
</style>
