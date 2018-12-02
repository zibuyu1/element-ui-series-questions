import axios from 'axios';
import qs from 'qs';
import urls from '../assets/js/baseUrl';

axios.defaults.baseURL = urls.baseUrl;
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use((config: any) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 接口Config目前支持了url(必传),method(非必传))
interface Config {
  url: string;
  params?: object;
  data?: object;
  method?: string;
  timeout?: string;
  headers?: object;
  config?: object;
}
class AxiosClass {
  public configs: any;
  constructor(configs: Config) {
    this.configs = configs;
    if (this.configs.method === 'POST') {
      this.configs.data = qs.stringify(this.configs.data);
    }
  }
  public request() {
    return axios(this.configs);
  }
}



export default function Axios(config: Config) {
  const wip = new AxiosClass(config);
  return wip.request();
}
