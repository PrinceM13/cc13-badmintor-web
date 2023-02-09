import { Outlet } from 'react-router-dom';
import VerticalSpace from '../components/VerticalSpace';

import Header from './Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* <div>contact us</div> */}
        </>
    );
};