import { ICarrouselProps } from '../components/Carrousel'

export const CarrouselContinue: ICarrouselProps = {
    name: 'recommended',
    cards: [
        {
            id: '0',
            title: 'title_0',
            imageBg:
                'https://images.unsplash.com/photo-1650700669709-b88505f0c334?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'category_0',
        },
        {
            id: '1',
            title: 'title_1',
            imageBg:
                'https://assets.api.uizard.io/api/cdn/stream/10fd3315-3428-4f59-aac4-27a141e84439.png',
            category: 'category_1',
        },
        {
            id: '2',
            title: 'title_2',
            imageBg:
                'https://images.unsplash.com/photo-1509631179647-0177331693ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxOaWdodGxpZmUlMkMlMjBTZW5zdWFsJTJDJTIwRmFzaGlvbnxlbnwxfHx8fDE3MTgyMTMwMzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'category_2',
        },
        {
            id: '3',
            title: 'title_3',
            imageBg:
                'https://images.unsplash.com/photo-1588517936140-11085e6b748b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'category_3',
        },
        {
            id: '4',
            title: 'title_4',
            requiredScope: 'over18',
            imageBg:
                'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxSb21hbmNlJTJDJTIwSW50aW1hdGUlMkMlMjBTdW5zZXR8ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'category_4',
        },
        {
            id: '5',
            title: 'title_5',
            requiredScope: 'over18',
            imageBg:
                'https://images.unsplash.com/photo-1679505519389-361f7863eeda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'category_5',
        },
        {
            id: '6',
            title: 'title_6',
            requiredScope: 'over18',
            isLastOfList: true,
            imageBg:
                'https://images.unsplash.com/photo-1579752515249-330bdebd2510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxTZW5zdWFsfGVufDF8fHx8MTcxODIxMzAzOXww&ixlib=rb-4.0.3&q=80&w=1080',
            category: 'category_6',
        },
    ],
}

export const CarrouselNewest: ICarrouselProps = {
    name: 'name_continue',
    cards: [
        {
            id: '7',
            title: 'title_7',
            isVideo: true,
            videoBottomText: 's3E3',
            imageBg:
                'https://images.unsplash.com/photo-1723713296730-c0ca274a222a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: '8',
            title: 'title_8',
            requiredScope: 'over18',
            isVideo: true,
            videoBottomText: 's1E1',
            imageBg:
                'https://images.unsplash.com/photo-1526509569184-2fe126e71cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxTZW5zdWFsJTJDJTIwU2VkdWN0aXZlJTJDJTIwSW50aW1hdGV8ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
        },
        {
            id: '9',
            title: 'title_9',
            requiredScope: 'over18',
            isVideo: true,
            videoBottomText: 's1E1',
            isLastOfList: true,
            imageBg:
                'https://images.unsplash.com/photo-1612490566683-0b3ceabea435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxQYXNzaW9uJTJDJTIwUm9tYW5jZSUyQyUyMFNlbnN1YWxpdHl8ZW58MXx8fHwxNzE4MjEzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
        },
    ],
}

export const scopesAndPrData = [
    { prUData: 'legalAge', scopes: ['over18fae', 'legalAge'] },
    { prUData: 'over16', scopes: ['over16fae', 'over16'] },
    { prUData: 'over21', scopes: ['over21fae', 'over21'] },
    { prUData: 'over65', scopes: ['over65fae', 'over65'] },
]

export const getScopeNumber = (scope: string) => {
    const ageScopeNumber = scope?.replace('over', '')?.replace('fae', '')

    return ageScopeNumber === 'legalAge'
        ? 18
        : ageScopeNumber
        ? parseInt(ageScopeNumber)
        : undefined
}
