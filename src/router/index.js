import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Add from '@/components/Adds/Add'
import AddList from '@/components/Adds/AddList'
import NewAdd from '@/components/Adds/NewAdd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/add/:id',
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: AddList
    },
    {
      path: '/new',
      name: 'addnew',
      component: NewAdd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})
