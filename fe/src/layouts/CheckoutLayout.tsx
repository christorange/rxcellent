import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFC from '../components/navbar/navbar';
import FooterFC from '../components/Footer';
import Checkout from '@/pages/checkout/Checkout';

const LandingLayout: FC = () => {
    return (
        <>
            <NavbarFC />
            <Outlet />
            <Checkout />
            <FooterFC />
        </>
    );
};

export default LandingLayout;
