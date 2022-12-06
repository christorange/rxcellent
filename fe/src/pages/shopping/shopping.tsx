import type { FC } from 'react';
import { Box, Skeleton, Fab, styled, Badge } from '@mui/material';
import ItemCard from './components/ItemCard/itemCard';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getItemsByKeywordApi, getItemsByCategoryApi, getAllItemsApi } from './shopping.service';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Cart, Item } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { itemAdd, itemRemove } from '@/features/Cart';

const StyledFab = styled(Fab)(() => ({
    position: 'fixed',
    zIndex: 1,
    right: '3%',
    bottom: '10%',
    height: '5rem',
    width: '5rem'
}));

interface ItemListProps {
    data: any;
    isLoading: boolean;
}

const Shopping: FC = () => {
    const shoppingCart: Cart = useSelector((state: any) => state.cart.value);
    let totalItemCount = 0;
    shoppingCart.nonPrescribedItems.forEach((item) => (totalItemCount += item.quantity.valueOf()));
    shoppingCart.prescribedItems.forEach((item) => (totalItemCount += item.quantity.valueOf()));

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        setKeyword(searchParams.get('keyword') || '');
        setCategory(searchParams.get('category') || '');
    }, [searchParams]);

    // const { data, isLoading } = useQuery(['items', keyword], async () => {
    //     if (category !== '') {
    //         const result: any = await getItemsByCategoryApi(category);
    //         return result;
    //     }
    //     if (keyword !== '') {
    //         const result: any = await getItemsByKeywordApi(keyword);
    //         return result;
    //     } else {
    //         const result: any = await getAllItemsApi();
    //         return result;
    //     }
    // });

    const handleItemAdd = (item: Item) => {
        dispatch(itemAdd(item));
    };

    const handleItemRemove = (item: Item) => {
        dispatch(itemRemove(item));
    };

    const ItemList: FC<ItemListProps> = (data: any, isLoading: boolean) => {
        return data.data.map((item: any, index: number) =>
            isLoading ? (
                <Skeleton variant="rounded" width={240} height={420} key={index} />
            ) : (
                <ItemCard
                    medicine={item.name}
                    price={item.price}
                    img={item.img}
                    ikey={item.key}
                    category={item.category}
                    brand={item.brand}
                    ingredient={item.ingredient}
                    details={item.details}
                    handleItemAdd={handleItemAdd}
                    handleItemRemove={handleItemRemove}
                    key={index}
                />
            )
        );
    };

    const ItemListFC = () => {
        if (category !== '') {
            const { data, isLoading } = useQuery(
                ['category', category],
                async () => await getItemsByCategoryApi(category)
            );
            return <ItemList data={data} isLoading={isLoading} />;
        } else if (keyword !== '') {
            const { data, isLoading } = useQuery(
                ['keyword', keyword],
                async () => await getItemsByKeywordApi(keyword)
            );
            return <ItemList data={data} isLoading={isLoading} />;
        } else {
            const { data, isLoading } = useQuery(['all'], async () => await getAllItemsApi());
            return <ItemList data={data} isLoading={isLoading} />;
        }
    };

    const handleCartIconClick = () => {
        navigate('/checkout');
    };

    return (
        <Box
            sx={{
                ml: '60px'
            }}
        >
            <p
                style={{
                    fontSize: '20px'
                }}
            >
                {keyword !== ''
                    ? `Search result for "${keyword}"`
                    : category !== ''
                    ? `Products of "${category}"`
                    : 'All items'}
            </p>
            <Grid container columns={4} xs={4} sx={{ margin: '0 auto' }}>
                <ItemListFC />
                {/* {data &&
                    data.data.map((item: any, index: number) =>
                        isLoading ? (
                            <Skeleton variant="rounded" width={240} height={420} key={index} />
                        ) : (
                            <ItemCard
                                medicine={item.name}
                                price={item.price}
                                img={item.img}
                                ikey={item.key}
                                category={item.category}
                                brand={item.brand}
                                ingredient={item.ingredient}
                                details={item.details}
                                handleItemAdd={handleItemAdd}
                                handleItemRemove={handleItemRemove}
                                key={index}
                            />
                        )
                    )} */}
            </Grid>
            <StyledFab color="primary" aria-label="cart" onClick={() => handleCartIconClick()}>
                <Badge
                    sx={{
                        '& .MuiBadge-badge': {
                            fontSize: 25,
                            height: '2rem',
                            width: '2rem',
                            borderRadius: '50%'
                        }
                    }}
                    badgeContent={totalItemCount}
                    color="error"
                >
                    <ShoppingCartOutlined sx={{ fontSize: '400%' }} />
                </Badge>
            </StyledFab>
        </Box>
    );
};

export default Shopping;
