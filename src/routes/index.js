import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    { path: '/', component: () => import('./Home.vue') },
    { path: '/about', component: () => import('./About.vue') }
  ]
})
