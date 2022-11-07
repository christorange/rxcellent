import { ResultCodeEnum } from '@utils/http/http.enum';

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
    // Splicing request parameters to url
    joinParamsToUrl?: boolean;
    // Format request parameter time
    formatDate?: boolean;
    // Whether to process the request result
    isTransformResponse?: boolean;
    // Whether to return native response headers
    // For example: use this attribute when you need to get the response headers
    isReturnNativeResponse?: boolean;
    // Interface address, use the default apiUrl if you leave it blank
    apiUrl?: string;
    // Whether to add a timestamp
    joinTime?: boolean;
    ignoreCancelToken?: boolean;
    // Whether to send token in header
    withToken?: boolean;
    // 请求重试机制
    retryRequest?: RetryRequest;
    isShowErrorModal?: boolean;
    isShowSuccessModal?: boolean;
    isShowGlobalLoading?: boolean;
}

export interface RetryRequest {
    isOpenRetry: boolean;
    count: number;
    waitTime: number;
}
export interface Result<T = any> {
    data: T;
    code: ResultCodeEnum;
    msg: string;
    message: string;
}
