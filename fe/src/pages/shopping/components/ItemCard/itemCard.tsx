import './ItemCard.scss';

import { FC, useState } from 'react';
import { Box, Typography, IconButton, styled } from '@mui/material';
import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material';
import ItemDetail from '../ItemDetail';

interface ItemProps {
    medicine: string;
    price: number;
    img: any;
    qty?: number;
    brand: string;
    ingredient: string;
    category: string;
    details: string;
}

const StyledQty = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px'
}));

const ItemCard: FC<ItemProps> = ({
    medicine,
    price,
    img,
    qty,
    brand,
    ingredient,
    category,
    details
}: ItemProps) => {
    const [count, setCount] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
            <Box
                sx={{
                    'width': '240px',
                    'height': '420px',
                    'border': '#f0f3f6 1px solid',
                    'borderRadius': '10px',
                    'backgroundColor': '#ffffff',
                    'display': 'flex',
                    'flexDirection': 'column',
                    'alignItems': 'center',
                    'marginRight': '60px',
                    'marginBottom': '30px',
                    '&:hover': {
                        boxShadow: '0px 5px 20px 3px rgba(0, 0, 0, 0.07)',
                        transform: 'translateY(-5px)'
                    }
                }}
            >
                <img
                    src={img}
                    style={{
                        margin: '15px 0',
                        height: '150px'
                    }}
                    onClick={() => setShowDetail(true)}
                />
                <p
                    style={{
                        width: '210px',
                        height: '66px',
                        margin: '10px 15px',
                        fontSize: '16px',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {medicine}
                </p>
                <p
                    style={{
                        margin: '0 15px',
                        color: '#ff5a5a',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        alignSelf: 'flex-start'
                    }}
                >
                    ${price}
                </p>
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: 'auto',
                        alignItems: 'space-between',
                        gap: '1.5rem',
                        borderRadius: '50px',
                        backgroundColor: '#f0f3f7'
                    }}
                >
                    <IconButton
                        color="primary"
                        onClick={() => setCount(count === 0 ? count : count - 1)}
                        disabled={count === 0}
                        sx={{ zIndex: '1' }}
                    >
                        <RemoveCircleRounded sx={{ fontSize: '40px' }} />
                    </IconButton>
                    <StyledQty sx={{ zIndex: '1' }}>{count}</StyledQty>
                    <IconButton
                        color="primary"
                        onClick={() => setCount(count + 1)}
                        sx={{ zIndex: '1' }}
                    >
                        <AddCircleRounded sx={{ fontSize: '40px' }} />
                    </IconButton>
                </p>
            </Box>
            <ItemDetail
                opened={showDetail}
                onClose={() => setShowDetail(false)}
                name={medicine}
                img={img}
                brand={brand}
                ingredient={ingredient}
                category={category}
                price={price}
                details={details}
            />
        </>
    );
};

export default ItemCard;
