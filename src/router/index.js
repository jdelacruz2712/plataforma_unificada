import Vue from 'vue'
import Router from 'vue-router'
import saldosMovimientos from '@/components/saldos_movimientos'
import subastas from '@/components/subastas'
import promociones from '@/components/promociones'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/saldos_movimientos',
      name: 'saldos_movimientos',
      component: saldosMovimientos
    },
    {
      path: '/subastas',
      name: 'subastas',
      component: subastas
    },
    {
      path: '/promociones',
      name: 'promociones',
      component: promociones
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
