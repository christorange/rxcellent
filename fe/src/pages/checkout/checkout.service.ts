import { post } from '@/service/index';
import { CHECKOUT_URL } from './checkout.api';

export const checkoutApi = async (data: any) => {
    return post(CHECKOUT_URL, data);
};
