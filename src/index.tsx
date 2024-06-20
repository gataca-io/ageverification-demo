import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AccessDenied from './AccessDenied'
import AdultContent, { oidcConfig } from './AdultContent'
import App from './App'
import VideoScreen from './Video'
import './index.css'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <AuthProvider {...oidcConfig}>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
