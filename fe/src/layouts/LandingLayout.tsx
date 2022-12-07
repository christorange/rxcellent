import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFC from '../components/navbar/navbar';
import FooterFC from '../components/Footer';
import Banner from '@/pages/shopping/components/banner';

const LandingLayout: FC = () => {
    return (
        <>
            <NavbarFC />
            <Banner />
            <Outlet />
            <FooterFC />
        </>
    );
};

export default LandingLayout;
