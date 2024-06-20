export type ICard = {
    title: string
    imageBg: string
    over18?: boolean
    isVideo?: boolean
    category?: string
    onClick?: () => void
}
