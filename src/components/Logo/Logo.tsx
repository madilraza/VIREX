import React from 'react'
import LogoIcon from '../../assets/Svg/logo.svg'

const Logo: React.FC = () => {
    return <div className="component-logo">
        <img src={LogoIcon} alt="logo-icon" className="component-logo__icon" width="100%" />
    </div>
}

export default Logo;