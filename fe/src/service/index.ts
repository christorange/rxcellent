import axios from 'axios';
import { VITE_API_URL } from '../configs';
import { getCookie, removeCookie, setCookie } from '@/pages/utils/cookie';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = VITE_API_URL;

const INVALID_TOKEN_CODE = 401;

/**
 * http request interceptors
 **/
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json',
            'Authorization': getCookie('token') || 'PASS'
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response interceptors
 */
axios.interceptors.response.use(
    (response) => {
        if (response.data.code === INVALID_TOKEN_CODE) {
            removeCookie('token');
            setCookie('token', 'PASS');
            return Promise.reject('invalid token');
        }
        return response;
    },
    (error) => {
        console.log('network error', error);
    }
);

/**
 * // get
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * // post
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: any, data: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * // put
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: any, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

//common dealing
export default function (fecth: any, url: any, param: any) {
    const _data = '';
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case 'get':
                console.log('begin a get request,and url:', url);
                get(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log('get request GET failed.', error);
                        reject(error);
                    });
                break;
            case 'post':
                post(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log('get request POST failed.', error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}
