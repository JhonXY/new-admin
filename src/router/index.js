import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import dashboard from '@/views/dashboard/index'
import Form from '@/views/page/form'
import Table from '@/views/table/index'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: dashboard
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    icon: 'zujian',
    children: [
      {
        path: 'index',
        component: Form,
        name: 'Form',
        icon: 'zonghe'
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    icon: 'tubiao',
    noDropdown: true,
    children: [
      {
        path: 'index',
        component: Table,
        name: 'Table',
        meta: { role: ['admin'] }
      }
    ]
  },
]
