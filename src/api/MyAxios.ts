import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";


export class MyAxios {
    server: AxiosInstance;
    constructor(config?: CreateAxiosDefaults<any> | undefined) {
        this.server = axios.create(config);
        this.interceptors();
    }

    interceptors() {
        // 添加请求拦截器
        this.server.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            const token = localStorage.getItem('token');
            config.headers.Authorization = `${token}`;
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        this.server.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response.data;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    http<T = any>(method: string = 'GET', url: string, data?: T) {
        return this.server.request({
            method: method,
            url: url,
            data: data,
            params: data
        });
    }

    get<T = any>(url: string, data?: T) {
        return this.server.get(url, { params: data });
    }

    post<T = any>(url: string, data: T) {
        return this.server.post(url, data);
    }

    put<T = any>(url: string, data: T) {
        return this.server.put(url, data);
    }

    delete<T = any>(url: string, data: T) {
        return this.server.delete(url, { params: data });
    }
}
