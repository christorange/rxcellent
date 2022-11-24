import { get } from '@/service/index';
import { useQuery } from '@tanstack/react-query';
import { GET_ITEMS_BY_KEYWORD_URL, GET_ITEMS_BY_CATEGORY_URL } from './shopping.api';
import type { SearchByKeywordService } from './shopping.type';

export const getItemsByKeywordApi = async (text: string) => {
    return get(GET_ITEMS_BY_KEYWORD_URL, { text });
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

export const getItemsByCategoryApi = async (text: string) => {
    return get(GET_ITEMS_BY_CATEGORY_URL, { text });
};
