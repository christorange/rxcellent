import { get, post } from '@/service/index';
import { GET_DRUG_BY_KEYWORD_URL, CREATE_PRESCRIPTION_URL } from './Doctor.api';
import { Prescription } from './Doctor.type';

export const getDrugByKeywordApi = async (text: string) => {
    return get(GET_DRUG_BY_KEYWORD_URL, { text });
};

export const createPrescriptionApi = async (data: Prescription) => {
    return post(CREATE_PRESCRIPTION_URL, data);
};
