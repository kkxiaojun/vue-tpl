declare module '*.vue' {
  import Vue from 'vue/dist/vue.esm.js';
  export default Vue;
}

interface ResponseData<T = any> {
  code: number;
  data?: T;
  message: string;
}

interface UserData {
  accessToken: string;
  accessTokenExpire: number;
  name: string;
  refreshToken: string;
  refreshTokenExpire: number;
  systemId: number;
  userId: number;
}
