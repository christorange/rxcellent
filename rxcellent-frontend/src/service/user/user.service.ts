import { post } from '../index';
import { LOGIN_URL, REGISTER_URL, CHANGE_PASSWORD_URL } from './userUrl';
import { LoginInputs, RegisterInputs } from './user';

export const loginApi = async (data: LoginInputs) => {
    return post(LOGIN_URL, data);
};

export const registerApi = async (data: RegisterInputs) => {
    return post(REGISTER_URL, data);
};

export const changePasswordApi = async (data: RegisterInputs) => {
    return post(CHANGE_PASSWORD_URL, data);
};
