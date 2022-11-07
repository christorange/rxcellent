// import { getAuthToken } from '@src/components/login/Login.service';
import { isString } from '../pages/utils/is';
import { deepMerge, setObjToUrlParams } from '../pages/utils/index';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import type { RequestOptions, Result } from './axios';

import { VAxios } from './request';
import { AxiosRetry } from './retry';
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';
import { formatRequestDate, joinTimestamp } from './helper';
import { ContentTypeEnum, RequestEnum } from './http.enum';
import { VITE_API_URL } from '../configs/index';

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
    /**
     * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
     */ transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
        const { isTransformResponse, isReturnNativeResponse, isShowErrorModal } = options;
        // 是否返回原生响应头 比如：需要获取响应头时使用该属性
        if (isReturnNativeResponse) {
            return res;
        }
        // 不进行任何处理，直接返回
        // 用于页面代码可能需要直接获取code，data，message这些信息时开启
        if (!isTransformResponse) {
            return res.data;
        }
        // 错误的时候返回
        // console.log(res);

        const { data } = res;

        if (!data) {
            // return '[HTTP] Request has no return value';
            throw new Error('Network error, please try again');
        }

        //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
        const { data: resData, code, message } = data;

        if (code != 200) {
            return Promise.reject(data);
        }

        // 这里逻辑可以根据项目进行修改
        const hasSuccess = data && Reflect.has(data, 'data') && code == 200;
        if (hasSuccess) {
            return resData;
        }

        // 在此处根据自己项目的实际情况对不同的code执行不同的操作
        // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可

        //throw new Error(message);
    },
    // 请求之前处理config
    beforeRequestHook: (config, options) => {
        const { joinParamsToUrl, formatDate, joinTime = true } = options;

        // TODO
        // const token = getAuthToken();
        // if (token) {
        //     config.headers = {
        //         ...config.headers,
        //         Authorization: token
        //     };
        // }
        config.url = `${VITE_API_URL}${config.url}`;

        const params = config.params || {};
        const data = config.data || false;
        formatDate && data && !isString(data) && formatRequestDate(data);
        if (config.method?.toUpperCase() === RequestEnum.GET) {
            if (!isString(params)) {
                // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
                config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
            } else {
                // 兼容restful风格
                config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
                config.params = undefined;
            }
        } else {
            if (!isString(params)) {
                formatDate && formatRequestDate(params);
                if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
                    config.data = data;
                    config.params = params;
                } else {
                    // 非GET请求如果没有提供data，则将params视为data
                    config.data = params;
                    config.params = undefined;
                }
                if (joinParamsToUrl) {
                    config.url = setObjToUrlParams(config.url as string, Object.assign({}, config.params, config.data));
                }
            } else {
                // 兼容restful风格
                config.url = config.url + params;
                config.params = undefined;
            }
        }
        return config;
    },
    /**
     * @description: 请求拦截器处理
     */
    requestInterceptors: (config) => {
        // 请求之前处理config
        return config;
    },

    /**
     * @description: 响应拦截器处理
     */
    responseInterceptors: (res: AxiosResponse<Result>) => {
        /* if (res.data.RET_CODE) {
            return Promise.reject({ message: res.data.RET_CODE });
        } */
        return res;
    },
    /**
     * @description: 响应错误处理
     */
    responseInterceptorsCatch: (axiosInstance: AxiosResponse, error: any) => {
        const { code, message, config } = error || {};
        // const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
        // const msg: string = response?.data?.error?.message ?? '';
        const err: string = error?.toString?.() ?? '';
        let errMessage = '';

        try {
            if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
                errMessage = '';
            }
            if (err?.includes('Network Error')) {
                errMessage = '服务端异常';
            }

            if (errMessage) {
                return Promise.reject(error);
            }
        } catch (error) {
            throw new Error(error as unknown as string);
        }
        errMessage = error.message;
        /* useMessageService.notification.error({
            message: errMessage
        }); */

        // 添加自动重试机制 保险起见 只针对GET请求
        const retryRequest = new AxiosRetry();
        const { isOpenRetry } = config.requestOptions.retryRequest;
        config.method?.toUpperCase() === RequestEnum.GET &&
            isOpenRetry &&
            // @ts-ignore
            retryRequest.retry(axiosInstance, error);

        // console.log(error);

        return Promise.reject(error);
    }
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
    return new VAxios(
        // 深度合并
        deepMerge(
            {
                // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
                // authentication schemes，e.g: Bearer
                // authenticationScheme: 'Bearer',
                authenticationScheme: '',
                timeout: 30 * 1000,
                // 基础接口地址
                withCredentials: true,
                headers: { 'Content-Type': ContentTypeEnum.JSON },
                // 如果是form-data格式
                // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
                // 数据处理方式
                transform: Object.assign({}, transform),
                // 配置项，下面的选项都可以在独立的接口请求中覆盖
                requestOptions: {
                    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
                    isReturnNativeResponse: false,
                    // 需要对返回数据进行处理
                    isTransformResponse: true,
                    // post请求的时候添加参数到url
                    joinParamsToUrl: false,
                    // 格式化提交参数时间
                    formatDate: true,
                    // 消息提示类型
                    errorMessageMode: 'message',
                    //  是否加入时间戳
                    joinTime: false,
                    // 忽略重复请求
                    ignoreCancelToken: true,
                    // 是否携带token
                    withToken: false,
                    isShowGlobalLoading: true,
                    isShowErrorModal: false,
                    retryRequest: {
                        isOpenRetry: false
                    }
                }
            },
            opt || {}
        )
    );
}
export const defHttp = createAxios();

export function httpGet<T>(url: string, params?: any, opts?: RequestOptions): Promise<T> {
    const config: AxiosRequestConfig = {
        url,
        params
    };
    return defHttp.get<T>(config, opts);
}

export function httpPost<T>(url: string, params: any, opts?: RequestOptions): Promise<T> {
    const config: AxiosRequestConfig = {
        url,
        params
    };
    return defHttp.post<T>(config, opts);
}

export function httpPut<T>(url: string, params: any, opts?: RequestOptions): Promise<T> {
    const config: AxiosRequestConfig = {
        url,
        params
    };
    return defHttp.put<T>(config, opts);
}

export function httpDelete<T>(url: string, params?: any, opts?: RequestOptions): Promise<T> {
    const config: AxiosRequestConfig = {
        url,
        params
    };
    return defHttp.delete<T>(config, opts);
}
