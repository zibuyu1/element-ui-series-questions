import Vue from 'vue'
import VueRouter from 'vue-router'
import { Route } from 'vue-router'
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $message: any,
    $router: VueRouter,
    $route: Route
  }
}



