import type { FC } from 'react';
import { Box, Skeleton, Fab, styled, Badge } from '@mui/material';
import ItemCard from './components/ItemCard/itemCard';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getItemsByKeywordApi, getItemsByCategoryApi, getAllItemsApi } from './shopping.service';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Cart, Item } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { itemAdd, itemAddPrescription, itemRemove } from '@/features/Cart';

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
    const dispatch = useDispatch();
    const location = useLocation();

    let totalItemCount = 0;
    shoppingCart.nonPrescribedItems.forEach((item) => (totalItemCount += item.quantity.valueOf()));
    shoppingCart.prescribedItems.forEach((item) => (totalItemCount += item.quantity.valueOf()));

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (location.state) {
            location.state.forEach((element: any) => {
                const newItem: Item = {
                    key: element.key,
                    title: element.name,
                    description: element.details,
                    imageSrc: element.img,
                    price: element.price,
                    quantity: element.qty
                };
                dispatch(itemAddPrescription(newItem));
            });
            window.history.replaceState({}, document.title);
        }

        setKeyword(searchParams.get('keyword') || '');
        setCategory(searchParams.get('category') || '');
    }, [searchParams]);

    const { data: cData, isLoading: cDataLoading } = useQuery(
        ['cItems', category],
        async () => {
            const result: any = await getItemsByCategoryApi(category);
            return result;
        },
        { enabled: category !== '' }
    );

    const { data: kData, isLoading: kDataLoading } = useQuery(
        ['kItems', keyword],
        async () => {
            if (keyword !== '') {
                const result: any = await getItemsByKeywordApi(keyword);
                return result;
            } else {
                return null;
            }
        },
        { enabled: keyword !== '' }
    );

    const { data: aData, isLoading: aDataLoading } = useQuery(
        ['all'],
        async () => {
            const result: any = await getAllItemsApi();
            return result;
        },
        { enabled: keyword === '' && category === '' }
    );

    const handleItemAdd = (item: Item) => {
        dispatch(itemAdd(item));
    };

    const handleItemRemove = (item: Item) => {
        dispatch(itemRemove(item));
    };

    const ItemList: FC<ItemListProps> = (data: any, isLoading: boolean) => {
        return (
            data &&
            data.data.map((item: any) =>
                isLoading ? (
                    <Skeleton variant="rounded" width={240} height={420} />
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
            )
        );
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
                {category !== ''
                    ? ItemList(cData, cDataLoading)
                    : keyword !== ''
                    ? ItemList(kData, kDataLoading)
                    : ItemList(aData, aDataLoading)}
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
