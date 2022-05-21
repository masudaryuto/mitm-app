import Vue from 'vue'
import VueRouter from 'vue-router'

import VMain from '@/components/VMain.vue'
import VCompany from '@/components/mitm-app/VCompany.vue'
import VCalendar from '@/components/mitm-app/VCalendar.vue'
import { isCallSignatureDeclaration } from 'typescript'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calendar',
    name: 'Calendar',
    component: VCalendar,
  },
  {
    path: '/',
    name: 'VMain',
    component: VMain,
  }, 
  {
    path: '/company',
    name: 'VCompany',
    component: VCompany,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
