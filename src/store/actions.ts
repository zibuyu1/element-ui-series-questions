import { ActionTree } from 'vuex';
import TYPES from './types';

const actions: ActionTree<any, any> = {
  setIsLogin({ commit }, login) {
    commit(TYPES.SET_IS_LOGIN, login);
  },
};

export default actions;
