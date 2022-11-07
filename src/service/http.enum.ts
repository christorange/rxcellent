/**
 * @description: Request result set
 */
export enum ResultCodeEnum {
    SUCCESS = '0',
    ERROR = '-1',
    AUTH_INVALID = '20006',
    TYPE = 'success'
}

/**
 * @description: request method
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8'
}
