import React from 'react';

interface ItemProps {
    image?: string;
    title: string;
    paragraph: string;
    direction: boolean;
}

const Item: React.FC<ItemProps> = ({ image, title, paragraph, direction }) => {
    return <div className="component-landingitem">
        {direction && <>
            <div className="component-landingitem__image-view">
                <img src={image} alt="landing-page-item-img" width={50} />
            </div>
            <div className="component-landingitem__text-view">
                <div className="component-landingitem__text-view__title text-pink text-md">{title}</div>
                <div className="component-landingitem__text-view__paragraph text-white text-sm">{paragraph}</div>
            </div>
        </>}

        {!direction && <>
            <div className="component-landingitem__text-view">
                <div className="component-landingitem__text-view__title text-pink text-md">{title}</div>
                <div className="component-landingitem__text-view__paragraph text-white text-sm">{paragraph}</div>
            </div>
            <div className="component-landingitem__image-view">
                <img src={image} alt="landing-page-item-img" width={50} />
            </div>
        </>}
    </div>
}

export default Item;