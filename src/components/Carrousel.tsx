import React from 'react'
import { ICard } from '../model/interfaces'
import Card from './Card'
import { useTranslation } from 'react-i18next'

export type ICarrouselProps = {
    name: string
    cards: ICard[]
    display?: () => void
}

const Carrousel: React.FC<ICarrouselProps> = React.memo(
    (props: ICarrouselProps) => {
        const { t } = useTranslation()

        return (
            <div className="carrousel">
                <div className="bodyRegularMD neutral100">{t(props.name)}</div>
                <div className="carrousel__container marginTop20">
                    {props.cards?.map((c: ICard, index: number) => (
                        <Card
                            key={`card__${index}`}
                            {...c}
                            onClick={props.display}
                        ></Card>
                    ))}
                </div>
            </div>
        )
    }
)

export default Carrousel
