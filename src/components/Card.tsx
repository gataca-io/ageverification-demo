import { useState } from 'react'
import { useAuth } from 'react-oidc-context'
import { ICard } from '../model/interfaces'
import cx from 'classnames'
import React from 'react'
import './components.css'
import { useTranslation } from 'react-i18next'
import { Chip, LockIcon } from '@gataca/design-system'

const Card: React.FC<ICard> = React.memo((props: ICard) => {
    const { t } = useTranslation()
    const [clicked, setClicked] = useState(false)
    const auth = useAuth()

    return (
        <div
            className={cx('card')}
            key={props.title}
            style={{ backgroundImage: `url(${props.imageBg})` }}
            id={`card__${props.id}`}
        >
            <div
                className="card__content"
                onClick={() => {
                    setClicked(true)
                    if (props.onClick) {
                        props.onClick()
                    }
                }}
            >
                {props.title && (
                    <div className={cx('card__content__title neutral100')}>
                        {t(props.title)}
                    </div>
                )}

                {props?.isVideo &&
                    ((clicked && !!auth.user) || !props.over18) && (
                        <div className="card__content__video">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                className="card__content__video__icon"
                                fill="none"
                            >
                                <path
                                    d="M16.2493 29.8171C23.6131 29.8171 29.5827 23.8475 29.5827 16.4837C29.5827 9.11993 23.6131 3.15039 16.2493 3.15039C8.88555 3.15039 2.91602 9.11993 2.91602 16.4837C2.91602 23.8475 8.88555 29.8171 16.2493 29.8171Z"
                                    stroke="white"
                                    strokeWidth="2.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.584 11.1504L21.584 16.4837L13.584 21.8171V11.1504Z"
                                    stroke="white"
                                    strokeWidth="2.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="card__content__video__footer">
                                <div className="card__content__video__footer__top">
                                    <p className="card__content__video__footer__top__text">
                                        {t(props.videoBottomText)}
                                    </p>
                                    <Chip
                                        id="card__content__video__footer__top__chip"
                                        text={'21:04'}
                                        containerStyle={{
                                            width: 'fit-content',
                                        }}
                                    />
                                </div>
                                <svg
                                    width="180"
                                    height="5"
                                    viewBox="0 0 180 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.0351562"
                                        y="0.519531"
                                        width="179.551"
                                        height="3.88217"
                                        rx="1.94109"
                                        fill="white"
                                        fillOpacity="0.3"
                                    />
                                    <rect
                                        x="0.0351562"
                                        y="0.519531"
                                        width="23.293"
                                        height="3.88217"
                                        rx="1.94109"
                                        fill="#DC3164"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}

                {!(clicked && !!auth.user) && props.over18 && (
                    <div className={cx('card__content__banner')}>
                        <Chip
                            text={t('requires18')}
                            color="yellow"
                            chipSize="medium"
                            id={'card__content__banner__chip'}
                            containerStyle={{
                                width: 'fit-content',
                            }}
                        />

                        <LockIcon size={'16'} id="lockIcon" />
                    </div>
                )}
            </div>
        </div>
    )
})

export default Card
