import { ICard } from '../model/interfaces'
import Card from './Card'

export type ICarrouselProps = {
    name: string
    cards: ICard[]
    display?: () => void
}

const Carrousel = (props: ICarrouselProps) => {
    return (
        <div className="carrousel">
            <div className="subtitle">{props.name}</div>
            <div className="carrouselContainer">
                {props.cards?.map((c: ICard) => (
                    <Card {...c} onClick={props.display}></Card>
                ))}
            </div>
        </div>
    )
}

export default Carrousel
