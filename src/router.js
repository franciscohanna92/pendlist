import Vue from 'vue'
import Router from 'vue-router'

import firebase from 'firebase' 

import Tasks from '@/views/Tasks.vue'
import Welcome from '@/views/Welcome.vue'
import SignUp from '@/views/SignUp.vue'
import Auth from '@/views/Auth.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: Tasks,
      meta: {
        isProtected: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: {
        isProtected: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let isProtected = to.matched.some(record => record.meta.isProtected)

  if(isProtected && !currentUser) {
    next('auth')
  }
  next()
})

export default router;