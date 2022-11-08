export type no_reponse = {
    status: Number;
    message: String;
    data: Object;
};

enum FetchMethods {
    POST = 'post',
    GET = 'get',
    PUT = 'put',
    DELETE = 'delete'
}
