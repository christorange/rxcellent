import axios from 'axios';
import { VITE_API_URL } from '../configs';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = VITE_API_URL;

/**
 * http request interceptors
 **/
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json'
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
                msag(err);
                reject(err);
            }
        );
    });
}

//common dealing
export default function (fecth: any, url: any, param: any) {
    let _data = '';
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

//error tips
function msag(err: any) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert('Please login in');
                break;

            case 403:
                alert('No perssion to access');
                break;

            case 404:
                alert('request address is error');
                break;

            case 408:
                alert('request is timeout');
                break;

            case 500:
                alert('network is error');
                break;

            case 501:
                alert('server is not complete');
                break;

            case 502:
                alert('network gate is error');
                break;

            case 503:
                alert('server is unavailable');
                break;

            case 504:
                alert('request timeout');
                break;

            case 505:
                alert('http version is not support');
                break;
            default:
        }
    }
}
