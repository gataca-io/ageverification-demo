import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import { oidcConfig } from './views/AdultContent'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@gataca/design-system'
import './styles/styleguide.css'
import './styles/reset.css'
import './styles/colors.css'
import './styles/fonts.css'
import './styles/spacing.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <AuthProvider {...oidcConfig}>
            <ThemeProvider label={'PRIMARY'}>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
