import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import MainLayout from '../layouts/MainLayout';

// visitor
import LoginPage from '../pages/visitor/LoginPage';
import HomePage from '../pages/visitor/HomePage';
import PromotionPage from '../pages/visitor/PromotionPage';
import BrandPage from '../pages/visitor/BrandPage';
import CategoryPage from '../pages/visitor/CategoryPage';
// user
import CartPage from '../pages/user/CartPage';
import ProfilePage from '../pages/user/ProfilePage';
// admin
import ManageCategory from '../pages/admin/ManageCategory';
import ManageSupplier from '../pages/admin/ManageSupplier';
import ManageProduct from '../pages/admin/ManageProduct';
import ManagePromotion from '../pages/admin/ManagePromotion';
// super user
import ManageEmployee from '../pages/super-user/ManageEmployee';

const router = createBrowserRouter([
    {
        path: 'login', element: <LoginPage />
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'promotions', element: <PromotionPage /> },
            { path: 'brands', element: <BrandPage /> },
            { path: 'categories', element: <CategoryPage /> }
        ]
    },
    {
        path: 'user',
        element: <MainLayout />,
        children: [
            { path: 'cart', element: <CartPage /> },
            { path: 'profile', element: <ProfilePage /> }
        ]
    },
    {
        path: 'admin',
        element: <MainLayout />,
        children: [
            { path: 'categories', element: <ManageCategory /> },
            { path: 'suppliers', element: <ManageSupplier /> },
            { path: 'products', element: <ManageProduct /> },
            { path: 'promotions', element: <ManagePromotion /> }
        ]
    },
    {
        path: 'super-user',
        element: <MainLayout />,
        children: [
            { path: 'employees', element: <ManageEmployee /> }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
};