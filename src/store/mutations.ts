import { MutationTree } from 'vuex';
import TYPES from './types';
const mutations: MutationTree<any> = {
    [TYPES.SET_IS_LOGIN](state, isLogin): void {
    state.isLogin = isLogin;
  },
};
export default mutations;
