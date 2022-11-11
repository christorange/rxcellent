import { post } from '../index';
import { LOGIN_URL, REGISTER_URL } from './userUrl';
import { no_reponse } from '../common';
import { LoginInputs, RegisterInputs } from './user';

export const loginApi = async (data: LoginInputs) => {
    return post(LOGIN_URL, data);
};

export const registerApi = async (data: RegisterInputs) => {
    return post(REGISTER_URL, data);
};
