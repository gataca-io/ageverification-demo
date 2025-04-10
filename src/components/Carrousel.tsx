import React from 'react';
import {useTranslation} from 'react-i18next';
import {getScopeNumber} from '../assets/data';
import {ICard} from '../model/interfaces';
import Card from './Card';
import './components.css';

export type ICarrouselProps = {
    name: string;
    cards: ICard[];
    display?: () => void;
    displayNotRestrictedVideo?: () => void;
};

const Carrousel: React.FC<ICarrouselProps> = React.memo((props: ICarrouselProps) => {
    const {t} = useTranslation();

    const primaryAgeScope = process.env.REACT_APP_PRIMARY_AGE_SCOPES;
    const primaryAgeScopeNumber = (primaryAgeScope && getScopeNumber(primaryAgeScope)) || 0;

    const secondaryAgeScope = process.env.REACT_APP_VIDEO_AGE_SCOPE;
    const secondaryAgeScopeNumber = (secondaryAgeScope && getScopeNumber(secondaryAgeScope)) || 0;

    const secondaryAgeScopeIsDifferent = !!secondaryAgeScopeNumber && primaryAgeScopeNumber !== secondaryAgeScopeNumber;

    return (
        <div className="carrousel">
            <div className="carrousel__label heading5 neutral100">{t(props.name)}</div>
            <div className="carrousel__container">
                {props.cards?.map((c: ICard, index: number) => (
                    <Card
                        key={`card__${index}`}
                        {...c}
                        requiredScopeNumber={secondaryAgeScopeNumber}
                        requiredScopeIsDifferentFromFirst={!!secondaryAgeScopeIsDifferent}
                        onClick={() =>
                            c.requiredScope && secondaryAgeScopeIsDifferent && props.display ? props.display() : c?.isVideo && props.displayNotRestrictedVideo ? props.displayNotRestrictedVideo() : {}
                        }
                    ></Card>
                ))}
            </div>
        </div>
    );
});

export default Carrousel;
