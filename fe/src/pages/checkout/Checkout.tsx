import { Box, styled, TextField } from '@mui/material';
import { FC, useRef, useState } from 'react';
import checkout_image from '@/assets/Checkout/checkout_image.png';
import Summary from './components/Summary';
import AddressCard from './components/AddressCard';
import CardContainer from './components/CardContainer';
import ItemsCard from './components/ItemsCard';
import { Cart } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { itemAddByKey, itemRemoveByKey, itemExtractByKey, emptyCartByTitle } from '@/features/Cart';

const CustomAddressCard = (
    key: any,
    props: any,
    handleNameChange: Function,
    handleStreetChange: Function,
    handleCityChange: Function,
    handleZipChange: Function,
    handleEmailChange: Function
) => {
    return (
        <AddressCard
            key={key}
            props={props}
            handleNameChange={handleNameChange}
            handleStreetChange={handleStreetChange}
            handleCityChange={handleCityChange}
            handleZipChange={handleZipChange}
            handleEmailChange={handleEmailChange}
        />
    );
};

const Checkout: FC = () => {
    const shoppingCart: Cart = useSelector((state: any) => state.cart.value);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');

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

    const handleName = (e: any) => {
        setName(e.target.value);
    };
    const handleStreet = (e: any) => {
        setStreet(e.target.value);
    };
    const handleCity = (e: any) => {
        setCity(e.target.value);
    };
    const handleZip = (e: any) => {
        setZip(e.target.value);
    };
    const handleEmail = (e: any) => {
        setEmail(e.target.value);
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
                    key="summary"
                    items={shoppingCart.nonPrescribedItems
                        .map(({ description, imageSrc, ...keepAttrs }) => keepAttrs)
                        .concat(
                            shoppingCart.prescribedItems.map(
                                ({ description, imageSrc, ...keepAttrs }) => keepAttrs
                            )
                        )}
                    address={{ name, street, city, zip, email }}
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
                    <CardContainer title="Shipping Address" key="cardcontainer1">
                        <CustomAddressCard
                            key="addresscard"
                            props={{
                                name,
                                street,
                                city,
                                zip,
                                email
                            }}
                            handleNameChange={handleName}
                            handleStreetChange={handleStreet}
                            handleCityChange={handleCity}
                            handleEmailChange={handleEmail}
                            handleZipChange={handleZip}
                        ></CustomAddressCard>
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
                                prescribed={false}
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
                            <ItemsCard items={shoppingCart.prescribedItems} prescribed={true} />
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
