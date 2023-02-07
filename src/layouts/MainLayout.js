import { Outlet } from 'react-router-dom';
import VerticalSpace from '../components/VerticalSpace';

import Header from './Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <VerticalSpace />
            <Outlet />
            <VerticalSpace />
            <div>contact us</div>
        </>
    );
};