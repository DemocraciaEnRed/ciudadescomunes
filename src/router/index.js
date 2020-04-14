import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DentroFuera from '../views/DentroFuera.vue'
import Nosotros from '../views/Nosotros.vue'

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
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },

]

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
