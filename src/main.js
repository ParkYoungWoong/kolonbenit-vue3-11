import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import TheButton from '~/components/TheButton.vue'
import TheModal from '~/components/TheModal.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('TheButton', TheButton)
  .component('TheModal', TheModal)
  .mount('#app')
