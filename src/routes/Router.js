import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import MainLayout from '../layouts/MainLayout';

// visitor (Promotion use Product Page)
import LoginPage from '../pages/visitor/LoginPage';
import HomePage from '../pages/visitor/HomePage';
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
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
// role of employee
import { ADMIN, CATEGORY_ID, PROMOTIONS, SUPER_USER, SUPPLIER_ID } from '../config/constant';
import ProductPage from '../pages/visitor/ProductPage';

const router = createBrowserRouter([
    {
        path: 'login',
        element: (
            <RedirectIfAuthenticate>
                <LoginPage />
            </RedirectIfAuthenticate>
        )
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '', element: <HomePage /> }
        ]
    },
    {
        path: 'promotions',
        element: <MainLayout />,
        children: [
            { path: '', element: <ProductPage filterBy={PROMOTIONS} /> },
        ]
    },
    {
        path: 'brands',
        element: <MainLayout />,
        children: [
            { path: '', element: <BrandPage /> },
            { path: ':filterId', element: <ProductPage filterBy={SUPPLIER_ID} /> },
        ]
    },
    {
        path: 'categories',
        element: <MainLayout />,
        children: [
            { path: '', element: <CategoryPage /> },
            { path: ':filterId', element: <ProductPage filterBy={CATEGORY_ID} /> },
        ]
    },
    {
        path: 'user',
        element: (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: 'cart', element: <CartPage /> },
            { path: 'profile', element: <ProfilePage /> }
        ]
    },
    {
        path: 'admin',
        element: (
            <ProtectedRoute level={[ADMIN, SUPER_USER]} >
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: 'categories', element: <ManageCategory /> },
            { path: 'suppliers', element: <ManageSupplier /> },
            { path: 'products', element: <ManageProduct /> },
            { path: 'promotions', element: <ManagePromotion /> }
        ]
    },
    {
        path: 'super-user',
        element: (
            <ProtectedRoute level={[SUPER_USER]}>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: 'employees', element: <ManageEmployee /> }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
};