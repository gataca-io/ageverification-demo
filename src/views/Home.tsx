import { Button } from '@gataca/design-system/web'
import cx from 'classnames'
import { Trans, useTranslation } from 'react-i18next'
import React from 'react'
import BaseLayout from '../components/BaseLayout'
import { getScopeNumber } from '../assets/data'

const HomeScreen: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()
    const primaryAgeScope = process.env.REACT_APP_PRIMARY_AGE_SCOPES
    const ageScopeNumber = primaryAgeScope && getScopeNumber(primaryAgeScope)

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
                    {ageScopeNumber ? (
                        <p className={cx('bodyRegularXL')}>
                            <Trans
                                i18nKey={'mustBeAge'}
                                values={{ age: ageScopeNumber }}
                            />
                        </p>
                    ) : null}
                    <a href="/adult">
                        <Button
                            color="purple"
                            onClick={() => {}}
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
