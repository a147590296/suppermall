import Vue from 'vue';
import VueRouter from 'vue-router';

//1.导入插件
Vue.use(VueRouter)

const home = () => import('views/home/Home');
const category = () => import('views/category/Category');
const cart = () => import('views/cart/Cart');
const profile = () => import('views/profile/Profile');

//2.创建路由实例
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
