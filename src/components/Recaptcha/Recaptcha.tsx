import React from 'react';
import RecaptchaButtonImage from '../../assets/Svg/recaptcha.svg'

const Recaptcha: React.FC = () => {
    return <div className="component-recaptcha">
        <input type="checkbox" className="component-recaptcha__checkbox" />
        <div className="component-recaptcha__text">I'm not a robot</div>
        <div className="component-recaptcha__right">
            <img src={RecaptchaButtonImage} alt="recaptcha-button-img" width="100%" />
        </div>
    </div>
}

export default Recaptcha;