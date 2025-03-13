import React from 'react'
import { useTranslation } from 'react-i18next'
import './components.css'

export type VideoProps = {
    close?: () => void
    over18?: boolean
    display?: boolean
}

const VideoCard: React.FC<VideoProps> = React.memo((props) => {
    const { t } = useTranslation()
    const { close, display } = props

    return display ? (
        <>
            <div className="videoCard__overlay" onClick={close}></div>
            <div className="videoCard">
                {close ? (
                    <div className="videoCard__close">
                        <svg
                            onClick={close}
                            className="videoCard__close__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20 4L4 20M4 4L20 20"
                                stroke="#e4e4e4"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                ) : null}
                {props.over18 ? (
                    <p className="videoCard__text">{t('contentUnlocked')}</p>
                ) : null}
                <img
                    className="videoCard__img"
                    src="https://img.freepik.com/free-vector/video-media-player-design_114579-839.jpg"
                />
            </div>
        </>
    ) : (
        <></>
    )
})

export default VideoCard
