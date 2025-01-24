import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import Page404View from '@/views/Page404View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Page404View,
    },
  ],
});

export default router;
