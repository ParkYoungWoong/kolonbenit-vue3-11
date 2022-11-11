import { createStore } from 'vuex'
import count from './count.js'

export default createStore({
  modules: {
    count
  }
})
