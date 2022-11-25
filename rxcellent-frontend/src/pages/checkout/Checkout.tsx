import { Box } from '@mui/material';
import { FC, useState } from 'react';
import checkout_image from '@/assets/Checkout/checkout_image.png';
import Summary from './components/Summary';
import AddressCard from './components/AddressCard';
import CardContainer from './components/CardContainer';
import ItemsCard from './components/ItemsCard';
import _ from 'lodash';

import MED1 from '@/assets/Landing/Carousel/medCard1.png';
import MED2 from '@/assets/Landing/Carousel/medCard2.png';
import MED3 from '@/assets/Landing/Carousel/medCard3.png';

const itemList = [
    {
        key: '1',
        title: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT a aa aaa aaa a aaaa a aaa aa a aa aa',
        price: 8.49,
        quantity: 1,
        imageSrc: MED1
    },
    {
        key: '2',
        title: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        quantity: 1,
        imageSrc: MED2
    },
    {
        key: '3',
        title: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        quantity: 2,
        imageSrc: MED3
    }
];

type Item = {
    key: String;
    title: String;
    description?: String;
    imageSrc?: String;
    price: Number;
    quantity: Number;
};

const Checkout: FC = () => {
    const [shoppingCart, setShoppingCart] = useState<Item[]>(itemList);

    const handleAddButton = (key: String) => {
        const updatedCart = shoppingCart.map((item) => {
            if (item.key === key) {
                return { ...item, quantity: item.quantity.valueOf() + 1 };
            } else {
                return item;
            }
        });
        setShoppingCart(updatedCart);
    };
    const handleRemoveButton = (key: String) => {
        const updatedCart = shoppingCart.map((item) => {
            if (item.key === key) {
                return {
                    ...item,
                    quantity:
                        item.quantity.valueOf() === 0 ? item.quantity : item.quantity.valueOf() - 1
                };
            } else {
                return item;
            }
        });
        setShoppingCart(updatedCart);
    };
    const handleDeleteButton = (key: String) => {
        return;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'secondary.main'
            }}
        >
            <Box
                sx={{
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'width': '50%',
                    '> *': {
                        width: '100%',
                        padding: '0.5rem',
                        margin: '1rem'
                    }
                }}
            >
                <img style={{}} src={checkout_image}></img>
                <Summary
                    items={shoppingCart.map(
                        ({ title, description, imageSrc, ...keepAttrs }) => keepAttrs
                    )}
                />
            </Box>
            <Box
                sx={{
                    'display': 'flex',
                    'flexDirection': 'column',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'width': '50%',
                    '> *': {
                        width: '100%',
                        padding: '0.5rem',
                        margin: '1rem'
                    }
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <CardContainer title="Shipping Address">
                        <AddressCard></AddressCard>
                    </CardContainer>
                    <CardContainer title="Non-Prescription Cart" addDeleteButton={true}>
                        <ItemsCard
                            items={shoppingCart}
                            clickAddHandler={handleAddButton}
                            clickRemoveHandler={handleRemoveButton}
                        ></ItemsCard>
                    </CardContainer>
                    <CardContainer title="Prescription Cart" addDeleteButton={true}>
                        {}
                    </CardContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
