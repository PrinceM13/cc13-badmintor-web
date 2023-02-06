import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <div>Welcom to Badminter</div>
            <Outlet />
            <div>contact us</div>
        </>
    );
};