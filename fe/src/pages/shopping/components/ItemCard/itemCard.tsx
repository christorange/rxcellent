import './ItemCard.scss';

import { FC, useState } from 'react';
import { Box, Typography, IconButton, styled } from '@mui/material';
import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material';
import ItemDetail from '../ItemDetail';

interface ItemProps {
    medicine: string;
    price: number;
    img: any;
    ikey: String;
    qty?: number;
    brand: string;
    ingredient: string;
    category: string;
    details: string;
    handleItemAdd: Function;
    handleItemRemove: Function;
}

const StyledQty = styled(Typography)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px'
}));

const ItemCard: FC<ItemProps> = (props: ItemProps) => {
    const [count, setCount] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const handleOnClickItemAdd = () => {
        setCount((prev) => prev + 1);

        props.handleItemAdd({
            key: props.ikey,
            title: props.medicine,
            description: props.details,
            imageSrc: props.img,
            price: props.price,
            quantity: count + 1
        });
    };

    const handleOnClickItemRemove = () => {
        setCount((prev) => prev - 1);

        props.handleItemRemove({
            key: props.ikey,
            title: props.medicine,
            description: props.details,
            imageSrc: props.img,
            price: props.price,
            quantity: count - 1
        });
    };

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
                    src={props.img}
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
                    {props.medicine}
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
                    ${props.price}
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
                        onClick={() => handleOnClickItemRemove()}
                        disabled={count === 0}
                        sx={{ zIndex: '1' }}
                    >
                        <RemoveCircleRounded sx={{ fontSize: '40px' }} />
                    </IconButton>
                    <StyledQty sx={{ zIndex: '1' }}>{count}</StyledQty>
                    <IconButton
                        color="primary"
                        onClick={() => handleOnClickItemAdd()}
                        sx={{ zIndex: '1' }}
                    >
                        <AddCircleRounded sx={{ fontSize: '40px' }} />
                    </IconButton>
                </p>
            </Box>
            <ItemDetail
                opened={showDetail}
                onClose={() => setShowDetail(false)}
                name={props.medicine}
                img={props.img}
                brand={props.brand}
                ingredient={props.ingredient}
                category={props.category}
                price={props.price}
                details={props.details}
            />
        </>
    );
};

export default ItemCard;
