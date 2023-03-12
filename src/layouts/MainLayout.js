import { Outlet } from 'react-router-dom';
import ContentLayout from './ContentLayout';

import Header from './Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <ContentLayout>
                <Outlet />
            </ContentLayout>
            {/* <div>contact us</div> */}
        </>
    );
};