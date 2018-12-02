import { GetterTree } from 'vuex';
const getters: GetterTree<any, any> = {
   changeLigin(state) {
      return state.isLogin;
   },
};
export default getters;
