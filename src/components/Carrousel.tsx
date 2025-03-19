import React from 'react'
import { ICard } from '../model/interfaces'
import Card from './Card'
import './components.css'
import { useTranslation } from 'react-i18next'

export type ICarrouselProps = {
    name: string
    cards: ICard[]
    display?: () => void
    displayNotRestrictedVideo?: () => void
}

const Carrousel: React.FC<ICarrouselProps> = React.memo(
    (props: ICarrouselProps) => {
        const { t } = useTranslation()

        return (
            <div className="carrousel">
                <div className="carrousel__label heading5 neutral100">
                    {t(props.name)}
                </div>
                <div className="carrousel__container">
                    {props.cards?.map((c: ICard, index: number) => (
                        <Card
                            key={`card__${index}`}
                            {...c}
                            onClick={() =>
                                c.over18 && props.display
                                    ? props.display()
                                    : c?.isVideo &&
                                      props.displayNotRestrictedVideo
                                    ? props.displayNotRestrictedVideo()
                                    : {}
                            }
                        ></Card>
                    ))}
                </div>
            </div>
        )
    }
)

export default Carrousel
