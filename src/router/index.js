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
  routes
})

export default router
