import type { FC } from 'react';
import { Modal } from '@mantine/core';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material';

const StyledQty = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px'
}));

interface ItemDetailProps {
    opened: boolean;
    onClose: () => void;
    img: string;
    name: string;
    brand: string;
    ingredient: string;
    category: string;
    price: number;
    details: string;
}

const ItemDetail: FC<ItemDetailProps> = ({
    opened = false,
    onClose,
    img,
    name,
    brand,
    ingredient,
    category,
    price,
    details
}) => {
    const [count, setCount] = useState(0);

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered={true}
            transition="fade"
            transitionDuration={300}
            transitionTimingFunction="ease"
            size={1000}
            shadow="md"
            radius={20}
            overflow="inside"
            sx={{
                '& .mantine-Modal-body': {
                    padding: '0 40px'
                }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginY: '20px',
                    gap: '50px'
                }}
            >
                <img
                    src={img}
                    style={{
                        height: '420px',
                        maxWidth: '420px'
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingRight: '40px'
                    }}
                >
                    <div
                        style={{
                            fontSize: '24px',
                            marginBottom: '10px'
                        }}
                    >
                        <b>{name}</b>
                    </div>
                    <p
                        style={{
                            fontSize: '20px',
                            margin: '10px 0'
                        }}
                    >
                        <b>Brand: </b>
                        {brand}
                    </p>
                    <p
                        style={{
                            fontSize: '20px',
                            margin: '10px 0'
                        }}
                    >
                        <b>Category: </b>
                        {category}
                    </p>
                    <p
                        style={{
                            fontSize: '20px',
                            margin: '10px 0'
                        }}
                    >
                        <b>Ingredient: </b>
                        {ingredient}
                    </p>
                    <p
                        style={{
                            fontSize: '30px',
                            color: '#ff5a5a',
                            fontWeight: 'bold'
                        }}
                    >
                        ${price}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            //justifyContent: 'start',
                            alignItems: 'space-between',
                            gap: '1.5rem',
                            borderRadius: '50px',
                            backgroundColor: '#f0f3f7',
                            width: 'fit-content'
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
                    </div>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    fontSize: '16px',
                    backgroundColor: '#f0f3f6',
                    borderRadius: '20px'
                }}
            >
                <p
                    style={{
                        padding: '20px'
                    }}
                >
                    {details}
                </p>
            </Box>
        </Modal>
    );
};

export default ItemDetail;
