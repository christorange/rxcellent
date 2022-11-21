import { Box } from '@mui/material';
import type { FC } from 'react';
import checkout_image from '@/assets/Checkout/checkout_image.png';
import Summary from './components/Summary';

const Checkout: FC = () => {
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
                    'width': '45%',
                    '> *': {
                        width: '100%',
                        padding: '0.5rem',
                        margin: '1rem'
                    }
                }}
            >
                <img style={{ width: 'auto' }} src={checkout_image}></img>
                <Summary />
            </Box>
        </Box>
    );
};

export default Checkout;
