import type { SigninPopupArgs } from 'oidc-client-ts'
import { User } from 'oidc-client-ts'
import { useEffect, useState } from 'react'
import { AuthProviderProps, useAuth } from 'react-oidc-context'
import BaseLayout from '../components/BaseLayout'
import Carrousel from '../components/Carrousel'
import RestrictedModal from '../components/RestrictedModal'
import VideoCard from '../components/VideoCard'
import cx from 'classnames'
import './views.css'
import { CarrouselContinue, CarrouselNewest } from '../assets/data'

import { useTranslation } from 'react-i18next'
import React from 'react'

const signinArgs: SigninPopupArgs = {
    popupWindowFeatures: {
        left: 200,
        top: 200,
        width: 400,
        height: 400,
    },
    scope: 'openid legalAge',
}

const onSigninCallback = (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname)
}

export const oidcConfig: AuthProviderProps = {
    authority: process.env.REACT_APP_IDP_HOST || 'https://vouch.dev.gataca.io',
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
    client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
    redirect_uri: `${process.env.REACT_APP_SERVER_NAME}/video`,
    scope: 'openid legalAge',
    response_mode: 'query',
    response_type: 'code',
    onSigninCallback: onSigninCallback,
}

const AdultContent: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()
    const auth = useAuth()
    console.log(JSON.stringify(auth))
    const [display, setDisplay] = useState(false)
    const [over18Selected, setOver18Selected] = useState(false)
    const [restricted, setRestricted] = useState(false)

    useEffect(() => {
        auth.events.addUserSignedIn(() => {
            console.log('USER SIGNED IN', auth.user)
        })
    })

    useEffect(() => {}, [display])

    const authAndDisplay = async () => {
        console.log(`${JSON.stringify(process.env)} -> client_id: ${
            process.env.REACT_APP_CLIENT_ID
        }
    client_secret: ${process.env.REACT_APP_CLIENT_SECRET}`)
        auth.signinPopup(signinArgs)
            .then((user) => {
                console.log('GOT USER', user)
                if (user?.profile?.legalAge === 'accepted') {
                    setOver18Selected(true)
                    setDisplay(true)
                } else {
                    setRestricted(true)
                }
            })
            .catch((err) => {
                console.log('ERR in OIDC', err)
            })
        console.log('TRIGGERED')
    }

    return (
        <BaseLayout footerText={t('unleashDesires')}>
            <div className="view__content">
                <Carrousel
                    {...CarrouselContinue}
                    display={() => authAndDisplay()}
                ></Carrousel>
                <Carrousel
                    {...CarrouselNewest}
                    display={() => authAndDisplay()}
                    displayNotRestrictedVideo={() => setDisplay(true)}
                ></Carrousel>

                <VideoCard
                    display={display}
                    over18={over18Selected}
                    close={() => (setDisplay(false), setOver18Selected(false))}
                ></VideoCard>
                {restricted && (
                    <RestrictedModal
                        close={() => setRestricted(false)}
                        overlay
                    />
                )}
            </div>
        </BaseLayout>
    )
})

export default AdultContent
