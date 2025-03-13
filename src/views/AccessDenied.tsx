import React from 'react'
import BaseLayout from '../components/BaseLayout'
import RestrictedModal from '../components/RestrictedModal'
import { useTranslation } from 'react-i18next'

const AccessDenied: React.FC = React.memo((props: any) => {
    const { t } = useTranslation()

    return (
        <BaseLayout footerText={t('errorContactSupport')}>
            <RestrictedModal></RestrictedModal>
        </BaseLayout>
    )
})

export default AccessDenied
