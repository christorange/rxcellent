import './ItemCard.scss';

import type { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface ItemProps {
    medicine: string;
    price: string;
    img: any;
    qty?: number;
}

const ItemCard: FC<ItemProps> = ({ medicine, price, img, qty }: ItemProps) => {
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
        </Box>
    );
};

export default ItemCard;
