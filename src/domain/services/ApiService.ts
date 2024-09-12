import {BASE_URL} from '@env';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import store from '../../application/store';

export default class ApiService {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axios.interceptors.request.use((request: any) => {
      // Cuando no hay token, se agrega el token que se encuentra en el store despues de loguearme
      if (!request.headers.Authorization) {
        request.headers.Authorization = 'Token ' + store.getState().auth.token;
      }

      return request;
    });

    this.axios.interceptors.response.use((response: AxiosResponse) => {
      return response;
    });
  }
}
