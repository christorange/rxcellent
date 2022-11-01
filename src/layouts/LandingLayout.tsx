import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFC from '../components/navbar/navbar';

const LandingLayout: FC = () => {
    return (
        <>
            <NavbarFC />
            <Outlet />
        </>
    );
};

export default LandingLayout;
