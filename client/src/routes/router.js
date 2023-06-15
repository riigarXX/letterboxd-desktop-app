import { createRouter, createWebHashHistory } from 'vue-router'
import { isAuthenticated } from '../middleware/auth';

import Dashboard from '../pages/dashboard.vue'
import Login from '../pages/login.vue'
import Peliculas from '../pages/peliculas.vue'
import Pelicula from '../pages/pelicula.vue'
import agregarPelicula from '../pages/agregarPelicula.vue'
import Pendientes from '../pages/pendientes.vue'
import Settings from '../pages/settings.vue'

const routes = [
  { name: 'login', path: '/', component: Login },
  {
    name: 'dashboard', path: '/dashboard', component: Dashboard, beforeEnter: isAuthenticated, children: [
      { name: 'peliculas', path: '/peliculas', component: Peliculas, beforeEnter: isAuthenticated },
      { name: 'pendientes', path: '/pendientes', component: Pendientes, beforeEnter: isAuthenticated },
      { name: 'settings', path: '/settings', component: Settings, beforeEnter: isAuthenticated },
    ]
  },
  { name: 'loadFilm', path: '/loadFilm/:ID', component: Pelicula },
  { name: 'addFilm', path: '/addFilm/:day', component: agregarPelicula },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router