import { createApp } from 'vue'
import { createPinia } from 'pinia' // ако ќе користиш Pinia
import App from './App.vue'
import router from './router' // нема потреба да пишуваш index.js

const app = createApp(App)

app.use(createPinia()) // користи Pinia
app.use(router) // користи router

app.mount('#app')
