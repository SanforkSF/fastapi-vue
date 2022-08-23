import Vue from 'vue';
import VueRouter from 'vue-router';


import store from '@/store';

import HomePage from '@/views/HomeView.vue';
import LoginPage from '@/views/LoginView.vue';
import RegisterPage from '@/views/RegisterView.vue';
import DashboardPage from '@/views/DashboardView.vue';
import ProfilePage from '@/views/ProfileView';
import NotePage from '@/views/NoteView';
import EditNote from '@/views/EditNoteView';



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
  {
    path: '/profile',
    name: 'profile-page',
    component: ProfilePage,
    meta: {requiresAuth: true},
  },
  {
    path: '/note/:id',
    name: 'note-page',
    component: NotePage,
    meta: {requiresAuth: true},
    props: true,
  },
  {
    path: '/note/:id',
    name: 'edit-note',
    component: EditNote,
    meta: {requiresAuth: true},
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;