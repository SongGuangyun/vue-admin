import Vue from 'vue'
import Router from "vue-router"
import routes from "./routes"
// import store from '@/store'

Vue.use(Router)
let asyncRouterFlag = 0

const router = new Router({
  routes,
})
router.beforeEach((to, from, next) => {
  if (!asyncRouterFlag) {
    asyncRouterFlag++
    // store.dispatch('getPermissionList');
    // const asyncRouters = store.getters.asyncRouters;
    // console.log('asyncRouters: ', asyncRouters);
    // const asyncRouters = store.getters['router/asyncRouters']
    // router.addRoutes(asyncRouters)
    next({
      ...to,
      replace: true
    })
  } else {
    next()
  }
})
// router.afterEach( route => {

// })
export default router