import { createApp } from 'vue'
import App from './App.vue'
import scrollNumber from "./components/";
const app = createApp(App)
app.use(scrollNumber)
app.mount('#app')
