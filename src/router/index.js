import Vue from 'vue';
import Router from 'vue-router';
import Loading from '@/views/Loading.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    }
  ]
});
