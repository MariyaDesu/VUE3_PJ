import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/components/home.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/components/test.vue') // 注意这里要带上 文件后缀.vue
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
