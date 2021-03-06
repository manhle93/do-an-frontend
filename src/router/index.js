import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/trangchu/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/login/login"),
  },
  {
    path: '/dangky',
    name: 'DangKy',
    component: () => import("../views/login/dangky"),
  },
  {
    path: '/baiviet/:id',
    name: 'BaiViet',
    component: () => import("../views/baiviet/baiviet"),
  },
  {
    path: '/vietbai',
    name: 'BaiViet',
    component: () => import("../views/baiviet/vietbaidai"),
  },
  {
    path: '/suabaiviet/:id',
    name: 'BaiViet',
    component: () => import("../views/baiviet/edit"),
  },
  {
    path: '/chude/:id',
    name: 'chude',
    component: () => import("../views/chude/index"),
  },
  {
    path: '/trangcanhan',
    name: 'trangcanhan',
    component: () => import("../views/trangcanhan/index"),
  },
  {
    path: '/canhan/:id',
    name: 'viewtrangcanhan',
    component: () => import("../views/trangcanhan/viewtrangcanhan"),
  },
  {
    path: '/tinnhan/:id',
    name: 'tinnhan',
    component: () => import("../views/tinnhan/index"),
  },
  {
    path: '/sanpham/:id',
    name: 'sanpham',
    component: () => import("../views/muaban/sanpham"),
  },
  {
    path: '/muasam',
    name: 'muasam',
    component: () => import("../views/muaban/index"),
  },
  {
    path: '/timkiem/:key',
    name: 'muasam',
    component: () => import("../views/timkiem/index"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
