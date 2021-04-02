import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue"
import { GET_LOCAL_ITEM } from "../utils/utils.js"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      requireAuth: true,
      title: "Converse"
    }
  },
  //登录页
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "登录"
    }
  },
  //详情页
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail'),
    meta: {
      title: '详情页'
    }
  },
  //购物车
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart'),
    meta: {
      title: "购物车"
    }
  },
  //收货地址
  {
    path: '/addorder',
    name: 'AddOrder',
    component: () => import('../views/AddOrder'),
    meta: {
      title: "订单详情"
    }
  },
  //支付页面
  {
    path: "/payment",
    name: "Payment",
    component: () => import('../views/Payment'),
    meta: {
      title: '支付订单'
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // } 
]

const router = new VueRouter({
  routes
})
// 路由守卫:在路由跳转前后执行的函数,称为为路由守卫钩子函数;
router.beforeEach((to, from, next) => {
  let token = GET_LOCAL_ITEM('token')
  // console.log(token);
  // 1.判断当前前往的页面是否需要登录权限
  if (to.matched.some(el => el.meta.requireAuth)) {
    //2.判断是否登录,如果已登录,则直接前往目标路由(to),否则进入登录页面;
    if (token) {
      next()
    } else {
      next({
        path: '/Login'
      })
    }
  } else {
    next()
  }
})
//后置路由守卫,在路由成功跳转之后才调用;
// router.afterEach((to,from)=>{
//   console.log(to.meta.title);
//   if(to.meta.title){
//     document.title = to.meta.title;
//   }else{
//     document.title = '蓝鲸';
//   }
//   console.log(from);
// })
export default router
