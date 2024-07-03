// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import Info from './components/InfoPage.vue';
import Drinks from './components/Drinks.vue';
import About from './components/AboutUs.vue'; 

const routes = [
  { path: '/homePage', component: Home },
  { path: '/infoPage', component: Info },
  { path: '/drinks', component: Drinks },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
