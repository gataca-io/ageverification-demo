import { User } from 'oidc-client-ts'
import { useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import BaseLayout from '../components/BaseLayout'
import Carrousel from '../components/Carrousel'
import VideoCard from '../components/VideoCard'
import { CarrouselContinue, CarrouselNewest } from '../assets/data'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import React from 'react'

function getUser() {
    const oidcStorage = localStorage.getItem(
        `oidc.user:<your authority>:<your client id>`
    )
    if (!oidcStorage) {
        return null
    }

    return User.fromStorageString(oidcStorage)
}

const VideoScreen: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()

    const auth = useAuth()

    useEffect(() => {
        let user = getUser()
        console.log(user)
        auth.events.addUserSignedIn(() => {
            console.log('USER SIGNED IN', auth.user)
        })
    })

    console.log('ACTIVE NAVIGATOR', auth.activeNavigator)

    if (auth.isLoading) {
        console.log('loading auth')
        let user = getUser()
        console.log(user)
    }

    if (auth.error) {
        //TODO: navigate to denied
        console.log(auth.error.message)
    }

    if (auth.isAuthenticated) {
        console.log('Auth user', auth.user)
    }

    return (
        <BaseLayout footerText={t('unleashDesires')}>
            <div className="view__content">
                <p className={cx('bodyBoldMD neutral100')}>
                    {t('adultContent')}
                </p>
                <Carrousel {...CarrouselContinue}></Carrousel>
                <Carrousel {...CarrouselNewest}></Carrousel>

                <VideoCard display={true}></VideoCard>
            </div>
        </BaseLayout>
    )
})

export default VideoScreen
