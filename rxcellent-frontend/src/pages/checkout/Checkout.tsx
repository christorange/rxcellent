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

const cart = {
    nonPrescribedItems: [
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
    ],
    prescribedItems: [
        {
            key: '4',
            title: 'Abilify',
            price: 96.18,
            quantity: 1,
            imageSrc: 'https://qtxasset.com/quartz/qcloud5/media/image/abilify_2.jpg'
        }
    ]
};

type Cart = {
    prescribedItems: Array<Item> | [];
    nonPrescribedItems: Array<Item> | [];
};

type Item = {
    key: String;
    title: String;
    description?: String;
    imageSrc?: String;
    price: Number;
    quantity: Number;
};

const Checkout: FC = () => {
    const [shoppingCart, setShoppingCart] = useState<Cart>(cart);

    const handleAddButton = (key: String) => {
        const updatedNonPrescriptionCart: Item[] = shoppingCart.nonPrescribedItems.map((item) => {
            if (item.key === key) {
                return { ...item, quantity: item.quantity.valueOf() + 1 };
            } else {
                return item;
            }
        });
        if (updatedNonPrescriptionCart) {
            setShoppingCart({
                nonPrescribedItems: [...updatedNonPrescriptionCart],
                prescribedItems: shoppingCart.prescribedItems
            });
        }
    };
    const handleRemoveButton = (key: String) => {
        const updatedNonPrescriptionCart: Item[] = shoppingCart.nonPrescribedItems.map((item) => {
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
        if (updatedNonPrescriptionCart) {
            setShoppingCart({
                nonPrescribedItems: [...updatedNonPrescriptionCart],
                prescribedItems: shoppingCart.prescribedItems
            });
        }
    };

    const handleRemoveItemButton = (key: String) => {
        setShoppingCart({
            nonPrescribedItems: shoppingCart.nonPrescribedItems.filter((item) => {
                return item.key !== key;
            }),
            prescribedItems: shoppingCart.prescribedItems
        });
    };

    const handleDeleteButton = (title: String) => {
        if (title.includes('Non-Prescription')) {
            setShoppingCart({
                nonPrescribedItems: [],
                prescribedItems: shoppingCart.prescribedItems
            });
        } else if (title.includes('Prescription')) {
            setShoppingCart({
                nonPrescribedItems: shoppingCart.nonPrescribedItems,
                prescribedItems: []
            });
        }
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
                    items={shoppingCart.nonPrescribedItems
                        .map(({ title, description, imageSrc, ...keepAttrs }) => keepAttrs)
                        .concat(
                            shoppingCart.prescribedItems.map(
                                ({ title, description, imageSrc, ...keepAttrs }) => keepAttrs
                            )
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
                    {shoppingCart.nonPrescribedItems.length !== 0 ? (
                        <CardContainer
                            title="Non-Prescription Cart"
                            addDeleteButton
                            clickDeleteHandler={handleDeleteButton}
                        >
                            <ItemsCard
                                items={shoppingCart.nonPrescribedItems}
                                clickAddHandler={handleAddButton}
                                clickRemoveHandler={handleRemoveButton}
                                clickRemoveItemHandler={handleRemoveItemButton}
                            ></ItemsCard>
                        </CardContainer>
                    ) : (
                        <></>
                    )}
                    {shoppingCart.prescribedItems.length !== 0 ? (
                        <CardContainer
                            title="Prescription Cart"
                            addDeleteButton
                            clickDeleteHandler={handleDeleteButton}
                        >
                            <ItemsCard items={shoppingCart.prescribedItems} prescribed />
                        </CardContainer>
                    ) : (
                        <></>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
