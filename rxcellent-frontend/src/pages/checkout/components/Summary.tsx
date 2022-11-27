import { Box, Button } from '@mui/material';
import SummaryRow from './SummaryRow';
import { FC } from 'react';

interface ISummary {
    items: Item[] | [];
}

type Item = {
    key: String;
    price: Number;
    quantity: Number;
};

const Summary: FC<ISummary> = (props: ISummary) => {
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
                    >
                        Checkout
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default Summary;
