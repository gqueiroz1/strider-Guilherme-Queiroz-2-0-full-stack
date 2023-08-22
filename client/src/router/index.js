import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: 'Feed',
    },
    {
      path: '/feed',
      name: 'Feed',
      component: () => import('../views/FeedList.vue'),
    }
  ]
})

export default router
