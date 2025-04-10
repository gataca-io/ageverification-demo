import {useTranslation} from 'react-i18next';
import './components.css';
import {Button} from '@gataca/design-system/web';
import React from 'react';

interface RestrictedModalProps {
    overlay?: boolean;
    close?: () => void;
}

const RestrictedModal: React.FC<RestrictedModalProps> = React.memo(({overlay, close}) => {
    const {t} = useTranslation();

    return (
        <>
            {overlay ? <div className="restrictedModal__overlay" onClick={close}></div> : null}
            <div className="restrictedModal">
                {close ? (
                    <div className="restrictedModal__close">
                        <svg onClick={close} className="restrictedModal__close__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 4L4 20M4 4L20 20" stroke="#e4e4e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                ) : null}
                <div
                    className="restrictedModal__image"
                    style={{
                        backgroundImage: 'url(https://freesvg.org/img/coredump-Keepass-dock-icon.png)'
                    }}
                />
                <div className="restrictedModal__content">
                    <p className="heading4 neutral100 textAlignCenter ">{t('contentRestricted')}</p>
                    <p className="bodyRegularMD neutral100 textAlignCenter marginTop5">{t('blockedDueAge')}</p>
                    <p className="bodyRegularMD neutral100 textAlignCenter">{t('verifyToProceed')}</p>
                    <Button color="purple" onClick={() => {}} showText id="restrictedModal__content__button" state="enable" style="fill" text={t('verifyAge')} textSize="large" />
                </div>
            </div>
        </>
    );
});

export default RestrictedModal;
