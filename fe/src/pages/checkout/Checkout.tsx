import { Box } from '@mui/material';
import { FC } from 'react';
import checkout_image from '@/assets/Checkout/checkout_image.png';
import Summary from './components/Summary';
import AddressCard from './components/AddressCard';
import CardContainer from './components/CardContainer';
import ItemsCard from './components/ItemsCard';
import { Cart } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { itemAddByKey, itemRemoveByKey, itemExtractByKey, emptyCartByTitle } from '@/features/Cart';

const Checkout: FC = () => {
    const shoppingCart: Cart = useSelector((state: any) => state.cart.value);
    const dispatch = useDispatch();

    const handleAddButton = (key: String) => {
        dispatch(itemAddByKey(key));
    };
    const handleRemoveButton = (key: String) => {
        dispatch(itemRemoveByKey(key));
    };

    const handleExtractItemButton = (key: String) => {
        dispatch(itemExtractByKey(key));
    };

    const handleDeleteButton = (title: String) => {
        dispatch(emptyCartByTitle(title));
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
                <img
                    style={{
                        transform: 'scale(0.6)'
                    }}
                    src={checkout_image}
                ></img>
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
                                clickRemoveItemHandler={handleExtractItemButton}
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
