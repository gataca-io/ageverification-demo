import { Button } from '@gataca/design-system'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import BaseLayout from '../components/BaseLayout'

const HomeScreen: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()

    return (
        <BaseLayout>
            <div className="initialView">
                <div className="initialView__content">
                    <h1 className={cx('initialView__content_title ')}>
                        {t('welcome')}

                        <p
                            className={cx(
                                'initialView__content_title tertiary600'
                            )}
                        >
                            Adult{' '}
                            <span
                                className={cx(
                                    'initialView__content_title bold tertiary600'
                                )}
                            >
                                Play Zone
                            </span>
                        </p>
                    </h1>
                    <p className={cx('bodyRegularXL')}>{t('mustBe16')}</p>
                    <a href="/adult">
                        <Button
                            color="purple"
                            onPress={() => {}}
                            showText
                            id="initialView__content__button"
                            state="enable"
                            style="fill"
                            text={t('verifyAge')}
                            textSize="medium"
                        />
                    </a>
                </div>
            </div>
        </BaseLayout>
    )
})

export default HomeScreen
