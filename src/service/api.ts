import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import config from '@config/config';

export class Api {
  instance: AxiosInstance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
  });
  checkConnection() {

  }

  checkResponse(data: any) {
    return !!data;
  }

  getError({response}: {response:any}) {
    return response;
  }

  handleErr = (error: any) => {
    return error;
  }

  request = (method: string, endpoint: string, body: any, optionalConfigs?: AxiosRequestConfig) => {
    this.checkConnection();
    const options = {
      endpoint,
      method,
      headers: {
        'Content-Type': config.contentJSON,
      }
    };
    return this.instance.request({
      headers: options.headers,
      method: options.method,
      url: options.endpoint,
      data: method === 'GET' ? undefined : body,
      ...optionalConfigs,
    }).then((res: any) => {
      // console.log({
      //   headers: options.headers,
      //   method: options.method,
      //   url: options.endpoint,
      //   data: method === 'GET' ? undefined : body,
      //   res,
      //   ...optionalConfigs,
      // })
      if (this.checkResponse(res)) {
        return res.data;
      }
      const err: Error = new Error(this.getError({ response: res }));
      return Promise.reject(err);
    }).catch(this.handleErr);
  }

  get = (endpoint: string, params?: any, optionalHeaders?: AxiosRequestConfig) => {
    return this.request('GET', endpoint, {}, {
      ...optionalHeaders,
      params,
    });
  }

  post = (endpoint: string, body?: any, optionalHeaders?: AxiosRequestConfig) => {
    return this.request('POST', endpoint, body, optionalHeaders);
  }

  put = (endpoint: string, body?: any, optionalHeaders?: AxiosRequestConfig) => {
    return this.request('PUT', endpoint, body, optionalHeaders);
  }

  delete = (endpoint: string, optionalHeaders?: AxiosRequestConfig) => {
    return this.request('DELETE', endpoint, {}, optionalHeaders);
  }
}

export default new Api();