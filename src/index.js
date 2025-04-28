import './style.scss';
import {createApp} from 'vue';
import {createWebHashHistory ,createWebHistory ,createMemoryHistory, createRouter } from 'vue-router'

import App from './app.vue';


import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  {path: '/chuck', component: Chuck, name: 'Chuck' },
  {path: '/rickandmorty', component: RickAndMorty, name: 'RickAndMorty' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');