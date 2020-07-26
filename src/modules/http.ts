import axios, { AxiosRequestConfig, AxiosResponse, AxiosInterceptorManager } from 'axios';
import { Message } from 'element-ui';

interface AxiosInstance {
  <T = any>(config: AxiosRequestConfig): Promise<T>;
  <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

export interface ResponseData<T = any> {
  code: number;
  data?: T;
  message: string;
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1000 * 10,
});

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = localStorage.getItem('accessToken');
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      const data: ResponseData = res.data;
      if (data.code !== 0) {
        Message({
          message: data.message,
          type: 'error',
        });
      }
      return Promise.resolve(res.data);
    } else {
      Message({
        message: '服务异常!',
        type: 'error',
      });
      return Promise.reject(new Error(res.data.message || 'Error'));
    }
  },
  (error: any) => {
    Message({
      message: '网络错误!',
      type: 'error',
    });
    return Promise.reject(error);
  }
);

export default service;
