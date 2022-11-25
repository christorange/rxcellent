import { get } from '@/service/index';
import {
    GET_ITEMS_BY_KEYWORD_URL,
    GET_ITEMS_BY_CATEGORY_URL,
    GET_ALL_ITEMS_URL
} from './shopping.api';

export const getItemsByKeywordApi = async (text: string) => {
    return get(GET_ITEMS_BY_KEYWORD_URL, { text });
};

export const getItemsByCategoryApi = async (name: string) => {
    return get(GET_ITEMS_BY_CATEGORY_URL, { name });
};

export const getAllItemsApi = async () => {
    return get(GET_ALL_ITEMS_URL, {});
};

// export const useGetItemsByKeyword: SearchByKeywordService.Self = (keyword) => {
//     useQuery<SearchByKeywordService.ResData>(
//         [GET_ITEMS_BY_KEYWORD_URL],
//         async () =>{
//             const data = await getItemsByKeywordApi<SearchByKeywordService.ResData>(keyword);
//             return data;
//         }
//     )
// }
