import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home/index/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/home/user/index.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/home/order/index.vue'),
        children:[
          {
            path: '/order/orderInfo',
            name: 'orderInfo',
            component: () => import('../views/home/order/orderInfo.vue')
          }   
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
