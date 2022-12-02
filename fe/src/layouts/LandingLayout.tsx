import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFC from '../components/navbar/navbar';
import FooterFC from '../components/Footer';

const LandingLayout: FC = () => {
    return (
        <>
            <NavbarFC />
            <Outlet />
            <FooterFC />
        </>
    );
};

export default LandingLayout;
