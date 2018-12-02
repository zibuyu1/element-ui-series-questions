import Local from '../utils/localStorageApi';
const local = new Local();
interface State {
  isLogin: boolean|any;
  listArr: object;
}

const state: State  = {
  isLogin: local.setItem('isLogin', false),
  listArr: [],
};
export default state;
