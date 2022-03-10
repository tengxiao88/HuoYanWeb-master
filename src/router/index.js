import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '缴费服务中心'
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
    children: [
      /* 主页 */
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '缴费服务中心'
        },
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/ftontHome.vue')
      },
      /* 订单 */
      {
        path: '/order',
        name: 'Order',
        meta: {
          title: '我的订单'
        },
        component: () => import(/* webpackChunkName: "Order" */ '../views/home/orderHome.vue')
      },
      /* 我的 */
      {
        path: '/my',
        name: 'My',
        meta: {
          title: '用户中心'
        },
        component: () => import(/* webpackChunkName: "Order" */ '../views/home/myHome.vue')
      },
      {
        /* 新增缴费 */
        path: '/addDianfei',
        name: 'AddDianfei',
        meta: {
          title: '新增缴费'
        },
        component: () =>
          import(/* webpackChunkName: "AddDianfei" */ '../views/dianfei/AddDianfei.vue')
      },
      {
        /* 电费缴费 */
        path: '/paymentDianfei/:account/:region/:identity/:remarks',
        name: 'PaymentDianfei',
        meta: {
          title: '电费缴纳中心'
        },
        component: () =>
          import(/* webpackChunkName: "PaymentDianfei" */ '../views/dianfei/PaymentCenter.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由发送变化修改页面title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    const head = document.getElementsByTagName('head')
    const meta = document.createElement('meta')
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (to.path === '/admin/login') {
//     if (!tokenStr) {
//       next()
//     } else {
//       next('/admin/home')
//     }
//   } else {
//     if (!tokenStr) {
//       next('/admin/login')
//       return
//     }
//     next()
//   }
// })

export default router
