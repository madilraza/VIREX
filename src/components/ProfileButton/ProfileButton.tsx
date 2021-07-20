import React from 'react'
import ProfileIcon from '../../assets/Svg/profile.svg'
import CaretIcon from '../../assets/Svg/caret.svg'

const ProfileButton: React.FC = ({ children }) => {
    return <div className="component-profilebutton">
        <img src={ProfileIcon} className="component-profilebutton__avatar" alt="profile-icon" />
        <div className="component-profilebutton__username text-light">{children}</div>
        <img src={CaretIcon} className="component-profilebutton__caret" alt="profile-caret" />
    </div>
}

export default ProfileButton;