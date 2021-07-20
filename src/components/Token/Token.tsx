import React from 'react'

interface TokenProps {
    image: string;
    title: string;
}

const Token: React.FC<TokenProps> = ({ image, title }) => {
    return <div className="component-token">
        <img src={image} className="component-token__image" alt={`component-token-${title}`} height={100} width={100} />
        <div className="component-token__title text-white text-button">{title}</div>
    </div>
}

export default Token;