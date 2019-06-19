import Vue from 'vue'
import Router from 'vue-router'

import RoutesLogin from '@/components/components_pages/component_login'
import RoutesDashboard from '@/components/components_pages/component_dashboard'
import RoutesUser from '@/components/components_pages/component_user'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: RoutesLogin
    },
    {
      path: '/login',
      name: 'Login',
      component: RoutesLogin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: RoutesDashboard
    },
    {
      path: '/user',
      name: 'Dashboard',
      component: RoutesUser
    }
  ]
})
