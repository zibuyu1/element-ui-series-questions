import Axios from '../service/http';

const api = {
  getData() {
    const config = {
      url: 'rest/part/list',
      params: { curPage: 1 },
    };
    return Axios(config);
  },
  login() {
    const config = {
      url: '/user/login',
      data: { userName: '1748500626@qq.com', password: '123456', validateCode: '', rememberMe: false },
      method: 'POST',
    };
    return Axios(config);
  },
};
export default api;
