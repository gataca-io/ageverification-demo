export type ICard = {
    id: string
    title: string
    imageBg: string
    over18?: boolean
    isVideo?: boolean
    category?: string
    isLastOfList?: boolean
    videoBottomText?: string
    onClick?: () => void
}
