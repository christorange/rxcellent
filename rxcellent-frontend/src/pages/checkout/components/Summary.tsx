import { Box, Button } from '@mui/material';
import SummaryRow from './SummaryRow';
import type { FC } from 'react';

const Summary: FC = () => {
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
                <SummaryRow left="Subtotal" right="$ 33.27" />
                <SummaryRow left="Tax" right="$ 2.08" />
                <SummaryRow left="Shipping" right="$ 4.99" />
                <hr
                    style={{
                        marginLeft: 0,
                        width: '70%',
                        height: '1px',
                        border: 'none',
                        background: '#111111'
                    }}
                />
                <SummaryRow left="Total" right="$ 40.34" size={24} weight={600} />
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
                            width: '100%',
                            color: 'white',
                            backgroundColor: '#37B9C5',
                            fontSize: '24px',
                            fontWeight: 500,
                            textTransform: 'none'
                        }}
                    >
                        Checkout
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default Summary;
