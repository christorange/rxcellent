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
    left: '3%',
    top: '50%',
    height: '5rem',
    width: '5rem'
}));

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

    const handleItemAdd = (item: Item) => {
        dispatch(itemAdd(item));
    };

    const handleItemRemove = (item: Item) => {
        dispatch(itemRemove(item));
    };

    const handleCartIconClick = () => {
        navigate('/checkout');
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
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
                                ikey={item.key}
                                category={item.category}
                                brand={item.brand}
                                ingredient={item.ingredient}
                                details={item.details}
                                handleItemAdd={handleItemAdd}
                                handleItemRemove={handleItemRemove}
                            />
                        )
                    )}
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
