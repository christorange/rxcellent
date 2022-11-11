import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFC from '../components/navbar/navbar';
import FooterFC from '../components/Footer';
import Banner from '../pages/shopping/components/banner';
import Filter from '../pages/shopping/components/Filter';
import { Box } from '@mui/material';

const ShoppingLayout: FC = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#f7feff'
            }}
        >
            <NavbarFC />
            <Banner />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    marginTop: '30px'
                }}
            >
                <Filter />
                <Box>
                    <Outlet />
                </Box>
            </Box>
            <FooterFC />
        </Box>
    );
};

export default ShoppingLayout;
