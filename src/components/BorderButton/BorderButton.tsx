import React from 'react'

interface BorderButtonProps {
    pink?: boolean;
}

const BorderButton: React.FC<BorderButtonProps> = ({ children, pink }) => {
    return <div className={`component-borderbutton text-button ${pink && "component-borderbutton-pink"}`}>{children}</div>
}

export default BorderButton;