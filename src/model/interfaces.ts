export type ICard = {
    id: string
    title: string
    imageBg: string
    requiredScope?: string
    requiredScopeNumber?: number
    requiredScopeIsDifferentFromFirst?: boolean
    isVideo?: boolean
    category?: string
    isLastOfList?: boolean
    videoBottomText?: string
    onClick?: () => void
}
