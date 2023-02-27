import {createRouter,createWebHashHistory} from 'vue-router'

import Dashboard from '../pages/dashboard.vue'
import Login from '../pages/login.vue'
import Rutina from '../pages/rutina.vue'
import Entrenamientos from '../pages/entrenamientos.vue'
import Dieta from '../pages/dieta.vue'
import Settings from '../pages/settings.vue'

const routes = [
  {name:'login',path:'/',component:Login},
  {name:'dashboard',path:'/dashboard',component:Dashboard,children:[
    {name:'rutina',path:'/rutina',component:Rutina},
    {name:'dieta',path:'/dieta',component:Dieta},
    {name:'settings',path:'/settings',component:Settings},
  ]},
  {name:'entrenamiento',path:'/entrenamientos/:idFirebase',component:Entrenamientos},

]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})

export default router