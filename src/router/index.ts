import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      title: 'सभासद नोंदणी| मराठा शिवमुद्रा प्रतिष्ठान' // Set the page title here
    },
    component: () => import('../views/RegisterSabhasad.vue')
  },
  {
    path: '/sabhasad-list',
    name: 'SabhasadList',
    meta: {
      title: 'सभासद यादी| मराठा शिवमुद्रा प्रतिष्ठान' // Set the page title here
    },
    component: () => import('../views/SabhasadList.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login| मराठा शिवमुद्रा प्रतिष्ठान' // Set the page title here
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/posting-request',
    name: 'postRequest',
    meta: {
      title: 'नियुक्ती विनंती| मराठा शिवमुद्रा प्रतिष्ठान' // Set the page title here
    },
    component: () => import('../views/PostingRequest.vue')
  },
  {
    path: '/verify-documents',
    name: 'verifyDocuments',
    component: () => import('../views/VerifyDocuments.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
