import './index.css';
import ReactDOM from 'react-dom/client';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import Landing from './pages/landing/Landing';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './configs/react-query.configs';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgetPassword from './pages/forgetPassword/forgetPassword';
import Shopping from './pages/shopping/shopping';
import ShoppingLayout from './layouts/ShoppingLayout';
import Doctor from '@pages/doctor/Doctor';
import { ThemeProvider } from '@mui/material';
import { theme } from '@configs/theme';
import CheckoutLayout from './layouts/CheckoutLayout';
import cartReducer from './features/Cart';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace={true} />
    },
    {
        path: 'home',
        element: <LandingLayout />,
        children: [
            {
                path: '',
                element: <Landing />
            }
        ]
    },
    {
        path: 'shop',
        element: <ShoppingLayout />,
        children: [
            {
                path: '',
                element: <Shopping />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'checkout',
        element: <CheckoutLayout />
    },
    {
        path: 'forget',
        element: <ForgetPassword />
    },
    {
        path: 'doctor',
        element: <Doctor />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    </QueryClientProvider>
);
