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
import { ADMIN, PROMOTIONS, SUPER_USER, BRANDS, CATEGORIES } from '../config/constant';
import ProductPage from '../pages/visitor/ProductPage';
import ProductDetailPage from '../pages/visitor/ProductDetailPage';
import ConfirmOrderPage from '../pages/user/ConfirmOrderPage';
import PaymentPage from '../pages/user/PaymentPage';
import OrderPage from '../pages/user/OrderPage';
import ManageOrder from '../pages/admin/ManageOrder';
import { Navigate } from 'react-router-dom';

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
    // {
    //     path: 'products',
    //     element: <MainLayout />,
    //     children: [
    //         { path: ':productId', element: <ProductDetailPage /> }
    //     ]
    // },
    {
        path: 'promotions',
        element: <MainLayout />,
        children: [
            { path: '', element: <ProductPage filterBy={PROMOTIONS} /> },
            { path: ':productId', element: <ProductDetailPage /> }
        ]
    },
    {
        path: 'brands',
        element: <MainLayout />,
        children: [
            { path: '', element: <BrandPage /> },
            { path: ':filterId', element: <ProductPage filterBy={BRANDS} /> },
            { path: ':filterId/:productId', element: <ProductDetailPage /> }
        ]
    },
    {
        path: 'categories',
        element: <MainLayout />,
        children: [
            { path: '', element: <CategoryPage /> },
            { path: ':filterId', element: <ProductPage filterBy={CATEGORIES} /> },
            { path: ':filterId/:productId', element: <ProductDetailPage /> }
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
            { path: 'profile', element: <ProfilePage /> },
            { path: 'confirm-order', element: <ConfirmOrderPage /> },
            { path: 'payment', element: <PaymentPage /> },
            { path: 'orders', element: <OrderPage /> }
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
            { path: 'promotions', element: <ManagePromotion /> },
            { path: 'orders', element: <ManageOrder /> }
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
    },
    // redirect to root if wrong path
    { path: '*', element: <Navigate to='/' /> }
]);

export default function Router() {
    return <RouterProvider router={router} />
};