import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import('../views/Items.vue'),
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import('../views/Item.vue'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/Page404.vue'),
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router; 