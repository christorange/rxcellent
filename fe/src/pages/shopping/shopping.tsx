import type { FC } from 'react';
import { Box, Skeleton } from '@mui/material';
import ItemCard from './components/ItemCard/itemCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getItemsByKeywordApi, getItemsByCategoryApi, getAllItemsApi } from './shopping.service';
import ItemDetail from './components/ItemDetail';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const Shopping: FC = () => {
    const [searchParams] = useSearchParams();
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        setKeyword(searchParams.get('keyword') || '');
        setCategory(searchParams.get('category') || '');
    }, [searchParams]);

    const { data, isLoading } = useQuery(['items', keyword], async () => {
        if (category !== '') {
            const result: any = await getItemsByCategoryApi(category);
            console.log('*****category*****', result);
            return result;
        }
        if (keyword !== '') {
            const result: any = await getItemsByKeywordApi(keyword);
            console.log('*****keyword*****', result);
            return result;
        } else {
            const result: any = await getAllItemsApi();
            return result;
        }
    });

    console.log('+++++++++', data);

    return (
        <Box
            sx={{
                ml: '60px'
            }}
        >
            <Grid container columns={4} xs={4} sx={{ margin: '0 auto' }}>
                {data &&
                    data.data.map((item: any, index: number) =>
                        isLoading ? (
                            <Skeleton variant="rounded" width={240} height={420} key={index} />
                        ) : (
                            <ItemCard
                                medicine={item.name}
                                price={item.price}
                                img={item.img}
                                key={item.key}
                                category={item.category}
                                brand={item.brand}
                                ingredient={item.ingredient}
                                details={item.details}
                            />
                        )
                    )}
            </Grid>
        </Box>
    );
};

export default Shopping;
