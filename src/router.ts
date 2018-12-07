import Vue from 'vue';
import Router from 'vue-router';
import Home from 'views/layout.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/uploads',
    },
    {
      path: '/',
      component: () => import('./views/layout.vue'),
      children: [
        {
          path: '/uploads',
          name: 'uploads',
          component: () => import('views/upload.vue'),
          meta: {
            title: '上传组件',
          },
        },
        {
          path: '/table',
          name: 'table',
          component: () => import('views/table.vue'),
          meta: {
            title: '表格组件',
          },
        },
      ],
    },
  ],
});

router.beforeEach((to: any, from: any, next: any) => {
  if (to.matched.some((m: any) => m.meta.auth)) {
    // 需要进行登录验证
    next();
  } else {
    // 不需要进行登录验证
    next();
  }
});
export default router;
