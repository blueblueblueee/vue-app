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
    meta:{title:'首页'},
    component: () => import('../views/home/index.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        meta:{title:'首页'},
        component: () => import('../views/home/index/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta:{title:'用户管理'},
        component: () => import('../views/home/user/index.vue')
      },
      {
        path: '/order',
        name: 'order',
        meta:{title:'订单管理'},
        component: () => import('../views/home/order/index.vue'),
        children:[
          {
            path: '/order/orderInfo',
            name: 'orderInfo',
            meta:{title:'订单信息'},
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
