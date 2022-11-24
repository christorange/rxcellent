import { WithParamsQueryService } from '@/service/http';

export namespace SearchByKeywordService {
    export interface ResData {
        status: number;
        names: string;
        data: {
            _id: string;
            key: string;
            names: string;
            brand_names: string;
            prescription: string;
            category: string;
            img: string;
            price: number;
        };
    }
    export type Self = WithParamsQueryService<string, ResData>;
}
