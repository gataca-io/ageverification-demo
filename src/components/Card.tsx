import { useState } from 'react'
import { useAuth } from 'react-oidc-context'
import { ICard } from '../model/interfaces'
import cx from 'classnames'
import React from 'react'
import './components.css'
import { useTranslation } from 'react-i18next'

const getIcon = (isLocked?: boolean) => {
    return !isLocked ? (
        <svg className="card__content__icon" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
                fill="#f0f0f0c7"
                d="m10 16.5 6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            ></path>
        </svg>
    ) : (
        <svg className="card__content__icon" viewBox="0 0 448 512">
            <path
                fill="#a96e6e"
                d="M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z"
            ></path>
        </svg>
    )
}

const Card: React.FC<ICard> = React.memo((props: ICard) => {
    const { t } = useTranslation()
    const [clicked, setClicked] = useState(false)
    const auth = useAuth()

    return (
        <div className="card" key={props.title}>
            <div
                className="card__container"
                id={`card__${props.id}__container`}
                style={{ backgroundImage: `url(${props.imageBg})` }}
                key={props.title + '_bg'}
            >
                <div
                    className="card__content"
                    onClick={() => {
                        setClicked(true)
                        if (props.isVideo && props.onClick) {
                            props.onClick()
                        }
                    }}
                >
                    {props.over18 && (
                        <div className="card__content__banner bodyRegularSM">
                            {t('requires18')}
                        </div>
                    )}
                    {props.title && (
                        <div
                            className={cx(
                                'card__content__title neutral100 bodyBoldMD'
                            )}
                        >
                            {t(props.title)}
                        </div>
                    )}
                    {!(clicked && !!auth.user) &&
                        props.isVideo &&
                        getIcon(props.over18)}
                </div>
            </div>
            {props.category && (
                <div
                    className={cx(
                        'card__container__footer neutral100 buttonSM marginTop12'
                    )}
                >
                    {t(props.category)}
                </div>
            )}
        </div>
    )
})

export default Card
