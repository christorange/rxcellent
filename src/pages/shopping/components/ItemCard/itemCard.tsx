import './ItemCard.scss';

import { FC, useState } from 'react';
import { Box, Typography, IconButton, styled } from '@mui/material';
import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material';

interface ItemProps {
    medicine: string;
    price: string;
    img: any;
    qty?: number;
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

const ItemCard: FC<ItemProps> = ({ medicine, price, img, qty }: ItemProps) => {
    let [count, setCount] = useState(0);
    return (
        <Box
            sx={{
                'width': '240px',
                'height': '400px',
                'maxHeight': '420px',
                'border': '#f0f3f6 2px solid',
                'borderRadius': '10px',
                'backgroundColor': '#ffffff',
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center',
                'marginRight': '60px',
                'marginBottom': '30px',
                '&:hover': { boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, 0.25)' }
            }}
        >
            <img
                src={img}
                style={{
                    margin: '15px 0'
                }}
            />
            <p
                style={{
                    margin: '10px 15px',
                    fontSize: '16px'
                }}
            >
                {medicine}
            </p>
            <p
                style={{
                    margin: '10px 15px',
                    color: '#ff5a5a',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    alignSelf: 'flex-start'
                }}
            >
                {price}
            </p>
            <p style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', alignItems: 'space-between', gap: '1.5rem' }}>
                <IconButton onClick={() => setCount(count === 0 ? count : count - 1)}>
                    <RemoveCircleRounded fontSize="large" sx={{ color: '#E4F4F5' }}></RemoveCircleRounded>
                </IconButton>
                <StyledQty>{count}</StyledQty>
                <IconButton onClick={() => setCount(count + 1)}>
                    <AddCircleRounded fontSize="large" sx={{ color: '#37B9C5' }}></AddCircleRounded>
                </IconButton>
            </p>
        </Box>
    );
};

export default ItemCard;
