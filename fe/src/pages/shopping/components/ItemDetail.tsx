import type { FC } from 'react';
import { Modal } from '@mantine/core';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered={true}
            transition="fade"
            transitionDuration={300}
            transitionTimingFunction="ease"
            size={850}
            sx={{
                '& .mantine-Paper-root': {
                    borderRadius: '20px'
                }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex'
                }}
            >
                <img
                    src={img}
                    style={{
                        height: '420px'
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <p
                        style={{
                            fontSize: '24px'
                        }}
                    >
                        <b>{name}</b>
                    </p>
                </Box>
            </Box>
        </Modal>
    );
};

export default ItemDetail;
