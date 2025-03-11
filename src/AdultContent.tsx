import type { SigninPopupArgs } from 'oidc-client-ts'
import { User } from 'oidc-client-ts'
import { useEffect, useState } from 'react'
import { AuthProviderProps, useAuth } from 'react-oidc-context'
import BaseLayout from './components/BaseLayout'
import Carrousel, { ICarrouselProps } from './components/Carrousel'
import RestrictedModal from './components/RestrictedModal'
import Video from './components/VideoCard'

const CarrouselContinue: ICarrouselProps = {
    name: 'Continue Watching',
    cards: [
        {
            title: 'Actual Temptations',
            imageBg:
                'https://images.unsplash.com/photo-1598588436257-0a91d91f3ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxTZW5zdWFsJTJDJTIwVXJiYW58ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'Passion, 3 series',
        },
        {
            title: 'Seductive Encounters',
            imageBg:
                'https://assets.api.uizard.io/api/cdn/stream/10fd3315-3428-4f59-aac4-27a141e84439.png',
            category: 'Seduction, 12 series',
        },
        {
            title: 'Passionate Journeys',
            imageBg:
                'https://images.unsplash.com/photo-1509631179647-0177331693ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxOaWdodGxpZmUlMkMlMjBTZW5zdWFsJTJDJTIwRmFzaGlvbnxlbnwxfHx8fDE3MTgyMTMwMzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'Forbidden, 1 serie',
        },
        {
            title: 'Sensual Delights',
            imageBg:
                'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxSb21hbmNlJTJDJTIwSW50aW1hdGUlMkMlMjBTdW5zZXR8ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'Temptation, 4 series',
        },
        {
            title: 'Elegant Indulgence',
            imageBg:
                'https://images.unsplash.com/photo-1531835551805-16d864c8d311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxMaW5nZXJpZSUyQyUyMFJvbWFuY2UlMkMlMjBCZWRyb29tfGVufDF8fHx8MTcxODIxMzAzOXww&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'Intimacy, 4 series',
        },
        {
            title: 'Enigmatic Desires',
            imageBg:
                'https://images.unsplash.com/photo-1531835551805-16d864c8d311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxMaW5nZXJpZSUyQyUyMFJvbWFuY2UlMkMlMjBCZWRyb29tfGVufDF8fHx8MTcxODIxMzAzOXww&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'Desire, 2 series',
        },
        {
            title: 'Exploring Desires',
            imageBg:
                'https://images.unsplash.com/photo-1579752515249-330bdebd2510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxTZW5zdWFsfGVufDF8fHx8MTcxODIxMzAzOXww&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'Romance, 5 series',
        },
    ],
}

const signinArgs: SigninPopupArgs = {
    popupWindowFeatures: {
        left: 200,
        top: 200,
        width: 400,
        height: 400,
    },
    scope: 'openid over18fae',
}

const CarrouselNewest: ICarrouselProps = {
    name: 'Newest Releases',
    cards: [
        {
            title: 'Intimate',
            over18: false,
            isVideo: true,
            imageBg:
                'https://images.unsplash.com/photo-1572544405078-45963c80d026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxJbnRpbWF0ZXxlbnwxfHx8fDE3MTgyMTMwMzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
        },
        {
            title: 'Age Verification Required',
            over18: true,
            isVideo: true,
            imageBg:
                'https://images.unsplash.com/photo-1526509569184-2fe126e71cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxTZW5zdWFsJTJDJTIwU2VkdWN0aXZlJTJDJTIwSW50aW1hdGV8ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
        },
        {
            title: 'Unlock Desires',
            over18: true,
            isVideo: true,
            imageBg:
                'https://images.unsplash.com/photo-1612490566683-0b3ceabea435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxQYXNzaW9uJTJDJTIwUm9tYW5jZSUyQyUyMFNlbnN1YWxpdHl8ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
        },
    ],
}

const onSigninCallback = (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname)
}

export const oidcConfig: AuthProviderProps = {
    authority: process.env.REACT_APP_IDP_HOST || 'https://vouch.dev.gataca.io',
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
    client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
    redirect_uri: `${process.env.REACT_APP_SERVER_NAME}/video`,
    scope: 'openid over18fae',
    response_mode: 'query',
    response_type: 'code',
    onSigninCallback: onSigninCallback,
}

const AdultContent = (props: any) => {
    const auth = useAuth()
    console.log(JSON.stringify(auth))
    const [display, setDisplay] = useState(false)
    const [restricted, setRestricted] = useState(false)

    useEffect(() => {
        auth.events.addUserSignedIn(() => {
            console.log('USER SIGNED IN', auth.user)
        })
    })

    const authAndDisplay = async () => {
        console.log(`${JSON.stringify(process.env)} -> client_id: ${
            process.env.REACT_APP_CLIENT_ID
        }
    client_secret: ${process.env.REACT_APP_CLIENT_SECRET}`)
        auth.signinPopup(signinArgs)
            .then((user) => {
                console.log('GOT USER', user)
                if (user?.profile?.over18fae === 'accepted') {
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
        <BaseLayout footerText="Unleash your desires.">
            <div className="content">
                <div className="title">Adult Content</div>
                <Carrousel {...CarrouselContinue}></Carrousel>
                <Carrousel
                    {...CarrouselNewest}
                    display={() => authAndDisplay()}
                ></Carrousel>

                <Video display={display}></Video>
                {restricted && <RestrictedModal></RestrictedModal>}
            </div>
        </BaseLayout>
    )
}

export default AdultContent
