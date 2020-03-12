import React from 'react';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPasswordPage from './pages/ForgotPassword';

const route = [
    {
        url: '/login',
        page: <LoginPage />,
        exact: true
    },
    {
        url: '/register',
        page: <RegisterPage />,
        exact: true
    },
    {
        url: '/forgot',
        page: <ForgotPasswordPage />,
        exact: true
    }
]

export default route;