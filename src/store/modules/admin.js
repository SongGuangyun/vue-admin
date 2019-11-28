import admin from "@/api/admin";
import {
  asyncRouterHandle
} from '@/utils/asyncRouter';

import {
  PERMISSION_LIST,
} from "../mutation-types.js";
const state = {
  state: {
    asyncRouters: []
  },
};

const getters = {
  asyncRouters: state => state.asyncRouters

};
const actions = {
  async getPermissionList({
    commit
  }) {
    const baseRouter = [{
      path: '/layout',
      name: 'layout',
      component: "view/layout/index.vue",
      meta: {
        title: "底层layout"
      },
      children: []
    }]
    let result = await admin.getPermissionList();
    baseRouter[0].children = result.data;
    baseRouter.push({
      path: '*',
      redirect: '/404'
    });
    asyncRouterHandle(baseRouter)
    commit(PERMISSION_LIST, {
      baseRouter
    });
    return true;
  },
};
const mutations = {
  [PERMISSION_LIST](state, { res }) {
    state.asyncRouters = res;
  },
};
export default {
  state,
  getters,
  actions,
  mutations
};