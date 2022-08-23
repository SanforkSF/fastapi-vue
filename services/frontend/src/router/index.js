import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/views/HomeView.vue';
import LoginPage from '@/views/LoginView.vue';
import RegisterPage from '@/views/RegisterView.vue';
import DashboardPage from '@/views/DashboardView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "home-page",
    component: HomePage,
  },
  {
    path: '/register',
    name: 'register-page',
    component: RegisterPage,
  },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'dashboard-page',
    component: DashboardPage,
    meta: {requiresAuth: true},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;