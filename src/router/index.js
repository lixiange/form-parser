import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index/index.vue'
import demo from '@/view/demo/index.vue'


Vue.use(Router);
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
};
export default new Router({ //type:1  为一级页面    type：2 为二级页面
  routes: [

    {
      path: "/index",
      name: "表单页面",
      component: index,
      props: true,
      meta: {
        index: 51,
      },
    },
    {
      path: "/demo",
      name: "测试页面",
      component: demo,
      props: true,
      meta: {
        index: 51,
      },
    },
    {
      path: '/',
      redirect:'/index'
    }
      ]
})
