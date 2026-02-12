import {Button} from '@gataca/design-system/web';
import cx from 'classnames';
import {Trans, useTranslation} from 'react-i18next';
import React from 'react';
import BaseLayout from '../components/BaseLayout';
import {getScopeNumber} from '../assets/data';

const HomeScreen: React.FC = React.memo((props: any) => {
    const {t} = useTranslation();
    const primaryAgeScope = process.env.REACT_APP_PRIMARY_AGE_SCOPES;
    const ageScopeNumber = primaryAgeScope && getScopeNumber(primaryAgeScope);

    return (
        <BaseLayout>
            <div className="initialView">
                <div className="initialView__content">
                    <h1 className={cx('initialView__content_title ')}>
                        {t('welcome')}

                        <p className={cx('initialView__content_title text-primary-default')}>
                            Adult <span className={cx('initialView__content_title bold text-primary-default')}>Play Zone</span>
                        </p>
                    </h1>
                    {ageScopeNumber ? (
                        <p className={cx('bodyRegularXL neutral-300')}>
                            <Trans i18nKey={'mustBeAge'} values={{age: ageScopeNumber}} />
                        </p>
                    ) : null}
                    <a href="/adult">
                        <button className="buttonMD button__ga button__ga__primary" data-i18n="later" id="accessWithoutSaveBtn">
                            {t('verifyAge')}
                        </button>
                    </a>
                </div>
            </div>
        </BaseLayout>
    );
});

export default HomeScreen;
