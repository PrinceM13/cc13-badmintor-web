import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <div>Welcom to Badminter</div>
            <Outlet />
            <div>contact us</div>
        </>
    );
};