import { BrandButton, Button } from '@gataca/design-system'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../customHooks/useWindowDimensions'
import { useTranslation } from 'react-i18next'
import React from 'react'
import LanguageSelector from '../components/LanguageSelector'

const HomeScreen: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()
    const { height, width } = useWindowDimensions()

    let isSmall = width <= 640
    const androidStoreLink =
        'https://play.google.com/store/apps/details?id=com.gataca.identity'
    const iosStoreLink = 'https://apps.apple.com/us/app/gataca/id1498607616'

    return (
        <div className="initialView">
            <div className="initialView__languageSelector">
                <LanguageSelector />
            </div>

            <div className="initialView__content">
                <h1 className={cx('initialView__content_title')}>
                    {t('welcome')}
                </h1>
                <p className={cx('bodyRegularXL')}>{t('mustBe16')}</p>
                <a href="/adult">
                    <Button
                        color="purple"
                        onPress={() => {}}
                        showText
                        id="verifyAge__button"
                        state="enable"
                        style="fill"
                        text={t('verifyAge')}
                        textSize="large"
                    />
                </a>

                <p className={cx('bodyRegularMD')}>{t('youllneedIdWallet')}</p>

                <div className="initialView__content__stores">
                    <Link
                        to={iosStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BrandButton
                            brand="apple"
                            color="white"
                            onPress={() => {}}
                            size={isSmall ? 'app' : 'web'}
                        />
                    </Link>
                    <Link
                        to={androidStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BrandButton
                            brand="google"
                            color="white"
                            onPress={() => {}}
                            size={isSmall ? 'app' : 'web'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default HomeScreen
