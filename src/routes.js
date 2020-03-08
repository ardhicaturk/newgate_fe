import React from 'react';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

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
    }
    
]

export default route;