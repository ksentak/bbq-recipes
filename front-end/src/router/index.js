import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // async beforeEnter(to, from, next) {
    //   try {
    //     if (this.$store.state.user !== null) next();
    //   } catch (e) {
    //     next('/login');
    //   }
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
