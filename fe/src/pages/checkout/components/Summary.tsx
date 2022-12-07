import { Box, Button } from '@mui/material';
import SummaryRow from './SummaryRow';
import { FC, useState } from 'react';
import { checkoutApi } from '../checkout.service';
import { Modal } from '@mantine/core';
import SUCCESS from '@assets/success.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from '@/types/types';
import { emptyCartByTitle } from '@/features/Cart';

interface ISummary {
    items: Item[] | [];
    address: any;
}

type Item = {
    key: String;
    title: String;
    price: Number;
    quantity: Number;
};

const Summary: FC<ISummary> = (props: ISummary) => {
    const shoppingCart: Cart = useSelector((state: any) => state.cart.value);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const calcSubtotal = (items: Item[]) => {
        let subtotal = 0;
        let subtotalStr = '0';
        let tax = '0';
        let shipping = '4.99';
        let total = '0';
        items.forEach((item) => {
            subtotal = Number(subtotalStr);
            subtotal += Number((item.price.valueOf() * item.quantity.valueOf()).toFixed(2));
            subtotalStr = subtotal.toFixed(2);
        });

        subtotalStr = Number(subtotalStr).toFixed(2);
        shipping = Number(subtotalStr) === 0 ? (0).toFixed(2) : shipping;
        tax = ((Number(subtotalStr) * 6) / 100).toFixed(2);
        total = (Number(subtotalStr) + Number(tax) + Number(shipping)).toFixed(2);
        return [subtotalStr, tax, shipping, total];
    };

    const amounts = calcSubtotal(props.items);

    const handleCheckout = async () => {
        const result: any = await checkoutApi({ data: { props, amounts } });
        if (result.status === 200) {
            console.log('sucessss');
            setShowModal(true);
        } else {
            console.log('fail');
        }
    };

    const handleModalSuccess = () => {
        dispatch(emptyCartByTitle('Non-Prescription Cart'));
        dispatch(emptyCartByTitle('Prescription Cart'));
        navigate('/');
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}
            >
                <p
                    style={{
                        font: 'Manrope',
                        fontWeight: 700,
                        fontSize: '32px',
                        marginBottom: '1.5rem'
                    }}
                >
                    Order summary
                </p>
                <SummaryRow left="Subtotal" right={'$ ' + amounts[0]} />
                <SummaryRow left="Tax" right={'$ ' + amounts[1]} />
                <SummaryRow left="Shipping" right={'$ ' + amounts[2]} />
                <hr
                    style={{
                        marginLeft: 0,
                        width: '70%',
                        height: '1px',
                        border: 'none',
                        background: '#111111'
                    }}
                />
                <SummaryRow left="Total" right={'$ ' + amounts[3]} size={24} weight={600} />
                <div
                    style={{
                        marginTop: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '70%'
                    }}
                >
                    <Button
                        sx={{
                            'width': '100%',
                            'color': 'white',
                            'backgroundColor': '#37B9C5',
                            'fontSize': '24px',
                            'fontWeight': 500,
                            'textTransform': 'none',
                            '&:disabled': {
                                color: 'white',
                                backgroundColor: 'gray'
                            }
                        }}
                        disabled={Number(amounts[3]) === 0}
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </Button>
                </div>
            </Box>
            <Modal
                opened={showModal}
                onClose={() => setShowModal(false)}
                centered={true}
                transition="fade"
                transitionDuration={300}
                transitionTimingFunction="ease"
                size={500}
                radius={20}
                overflow="inside"
                sx={{
                    '& .mantine-Modal-body': {
                        padding: '0 10px'
                    }
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: 'fit-content'
                    }}
                >
                    <img src={SUCCESS} />
                    <h2
                        style={{
                            margin: '30px 0'
                        }}
                    >
                        Checkout is successful!
                    </h2>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '200px',
                            height: '50px'
                        }}
                        onClick={() => handleModalSuccess()}
                    >
                        Back to home
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default Summary;
