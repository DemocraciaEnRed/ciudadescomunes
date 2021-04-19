import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import NewHome from '../views/NewHome.vue'
// import DentroFuera from '../views/DentroFuera.vue'
import Nosotros from '../views/Nosotros.vue'
import Agenda from '../views/Agenda2020.vue'
// import Exponen from '../views/Exponen.vue'
// import Talleres from '../views/Talleres.vue'
import Congreso2020 from '../views/congreso/2020.vue'
import Incubadora from '../views/incubadora/Acerca.vue'
import Incubadora2020 from '../views/incubadora/2020.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/dentrofuera',
  //   name: 'DentroFuera',
  //   component: DentroFuera
  // },
  {
    path: '/quienes-somos',
    name: 'QuienesSomos',
    component: Nosotros
  },
  {
    path: '/agenda2020',
    name: 'Agenda2020',
    component: Agenda
  },
  // {
  //   path: '/exponen',
  //   name: 'Exponen',
  //   component: Exponen
  // },
  // {
  //   path: '/talleres',
  //   name: 'Talleres',
  //   component: Talleres
  // },
  {
    path: '/incubadora',
    name: 'Incubadora',
    component: Incubadora,
  },
  {
    path: '/incubadora/2020',
    name: 'Incubadora2020',
    component: Incubadora2020,
  },
  {
    path: '/congreso/2020',
    name: 'Congreso2020',
    component: Congreso2020
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
