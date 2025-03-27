import type { SigninPopupArgs } from 'oidc-client-ts'
import { User } from 'oidc-client-ts'
import { useEffect, useState } from 'react'
import { AuthProviderProps, useAuth } from 'react-oidc-context'
import {
    CarrouselContinue,
    CarrouselNewest,
    scopesAndPrData,
} from '../assets/data'
import BaseLayout from '../components/BaseLayout'
import Carrousel from '../components/Carrousel'
import RestrictedModal from '../components/RestrictedModal'
import VideoCard from '../components/VideoCard'
import './views.css'

import React from 'react'
import { useTranslation } from 'react-i18next'

const signinArgs: SigninPopupArgs = {
    popupWindowFeatures: {
        left: 200,
        top: 200,
        width: 400,
        height: 400,
    },
    scope: `openid ${process.env.REACT_APP_VIDEO_AGE_SCOPE}`,
}

const onSigninCallback = (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname)
}

export const oidcConfig: AuthProviderProps = {
    authority: process.env.REACT_APP_IDP_HOST || 'https://vouch.dev.gataca.io',
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
    client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
    redirect_uri: `${process.env.REACT_APP_SERVER_NAME}/video`,
    scope: `openid ${process.env.REACT_APP_VIDEO_AGE_SCOPE}`,
    response_mode: 'query',
    response_type: 'code',
    onSigninCallback: onSigninCallback,
}

const AdultContent: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()
    const auth = useAuth()
    // console.log(JSON.stringify(auth))
    const [display, setDisplay] = useState(false)
    const [
        overDifferentPrimaryAgeSelected,
        setOverDifferentPrimaryAgeSelected,
    ] = useState(false)
    const [restricted, setRestricted] = useState(false)

    useEffect(() => {
        auth.events.addUserSignedIn(() => {
            // console.log('USER SIGNED IN', auth.user)
        })
    })

    useEffect(() => {}, [display])

    const secondaryAgeScope = process.env.REACT_APP_VIDEO_AGE_SCOPE

    const profileData = secondaryAgeScope
        ? scopesAndPrData?.find((el) => el.scopes?.includes(secondaryAgeScope))
              ?.prUData
        : undefined

    const authAndDisplay = async () => {
        auth.signinPopup(signinArgs)
            .then((user) => {
                // console.log('GOT USER', user)
                if (
                    user?.profile &&
                    profileData &&
                    user?.profile[profileData] === 'accepted'
                ) {
                    setOverDifferentPrimaryAgeSelected(true)
                    setDisplay(true)
                } else {
                    setRestricted(true)
                }
            })
            .catch((err) => {
                // console.log('ERR in OIDC', err)
            })
    }

    return (
        <BaseLayout footerText={t('unleashDesires')} noRightPadding>
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
                    contentUnblocked={
                        !!(overDifferentPrimaryAgeSelected && secondaryAgeScope)
                    }
                    close={() => (
                        setDisplay(false),
                        setOverDifferentPrimaryAgeSelected(false)
                    )}
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
