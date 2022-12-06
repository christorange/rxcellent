import { get, post } from '@/service/index';
import { GET_PRESCRIPTION_URL, GET_ONE_ITEM_BY_KEY } from './Landing.api';

export const getPrescriptionApi = async (rxNumber: String | null, date: string | undefined) => {
    return post(GET_PRESCRIPTION_URL, { prescriptionNumber: rxNumber, patientDateOfBirth: date });
};

export const getOneItemApi = async (key: String) => {
    return get(GET_ONE_ITEM_BY_KEY + `/${key}`);
};
