import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Page/Home.vue';
import Cart from '../Page/Cart.vue';
import Product from '../Page/Product.vue';
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart,
  },
  {
    path:'/product',
    name:'product',
    component:Product,
  },
];
const router = new VueRouter({
    mode:"history",
    routes,
});
export default router;