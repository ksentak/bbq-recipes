import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    async beforeEnter(to, from, next) {
      try {
        // Grab data from store
        // If logged in === true and user exists
        next();
      } catch (e) {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
