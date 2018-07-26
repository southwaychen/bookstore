import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Category from '@/pages/Category'
import Me from '@/pages/Me'
import BookDetail from '@/pages/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'Main',
      path: '/',
      component: Main,
      children:[
        {name: 'Home',path: 'home',component: Home},
        {name: 'Cart',path: 'car',component: Cart},
        {name: 'Category',path:'category',component: Category},
        {name: 'Me',path: 'me', component: Me}
      ]
    },
    {
      name:' BookDetail',
      path: '/books/:bookId',
      component:BookDetail
    }

  ]
})
