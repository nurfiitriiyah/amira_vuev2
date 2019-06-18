import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RoutesLogin from '@/components/components_pages/component_login'
import RoutesDashboard from '@/components/components_pages/component_dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
