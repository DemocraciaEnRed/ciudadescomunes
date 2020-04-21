import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DentroFuera from '../views/DentroFuera.vue'
import Nosotros from '../views/Nosotros.vue'
import Agenda from '../views/Agenda.vue'
import Talleres from '../views/Talleres.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dentrofuera',
    name: 'DentroFuera',
    component: DentroFuera
  },
  {
    path: '/quienes-somos',
    name: 'QuienesSomos',
    component: Nosotros
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/talleres',
    name: 'Talleres',
    component: Talleres
  },

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
