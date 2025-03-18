import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import AccessDenied from './views/AccessDenied'
import AdultContent from './views/AdultContent'
import VideoScreen from './views/Video'
import HomeScreen from './views/Home'
import { I18nextProvider } from 'react-i18next'
import i18n from './translations/i18n'
import React from 'react'

const App = (props: any) => {
    const router = createBrowserRouter([
        {
            path: '*',
            element: <Navigate replace to="/" />,
        },
        {
            path: '/',
            element: <HomeScreen />,
        },
        {
            path: '/denied',
            element: <AccessDenied />,
        },
        {
            path: '/adult',
            element: <AdultContent />,
        },
        {
            path: '/video',
            element: <VideoScreen />,
        },
    ])
    return (
        <I18nextProvider i18n={i18n}>
            <RouterProvider router={router} />
        </I18nextProvider>
    )
}

export default App
