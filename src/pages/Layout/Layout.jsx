import React from "react";
import { Container, Grid } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Search, ProfileButton, Logo, Tab, Input, BorderButton, Recaptcha } from "../../components";
import { useWindowWidth } from '../../hooks';

import MenuIcon from '../../assets/Svg/menu.svg';

import SocialIcon1_1 from '../../assets/Svg/social-1-1.svg';
import SocialIcon1_2 from '../../assets/Svg/social-1-2.svg';
import SocialIcon1_3 from '../../assets/Svg/social-1-3.svg';
import SocialIcon2_1 from '../../assets/Svg/social-2-1.svg';
import SocialIcon2_2 from '../../assets/Svg/social-2-2.svg';
import SocialIcon2_3 from '../../assets/Svg/social-2-3.svg';
import SocialIcon2_4 from '../../assets/Svg/social-2-4.svg';
import SocialIcon2_5 from '../../assets/Svg/social-2-5.svg';

import LiveChatIcon from '../../assets/Svg/live_chat.svg';

const Layout = ({ children }) => {
  const width = useWindowWidth();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const recaptchaRef = React.createRef();

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <div className="layout">
      <div className="layout-header">
        <Container maxWidth="lg">
          <div className="layout-header_">
            <div className="layout-header__logo">
              <Logo />
            </div>
            {width > 768 ? (<>
              <div className="layout-header__tabs">
                <Tab>Trade</Tab>
                <Tab>Markets</Tab>
                <Tab>Support</Tab>
                <Tab>Affiliate Program</Tab>
              </div>
              <div className="layout-header__right">
                <Button>Log In</Button>
                <Button>Sign Up</Button>
                <Search />
                <ProfileButton>JohnDoe</ProfileButton>
              </div>
            </>) : (<>
              <div
                className="layout-header__mobile-menu__icon"
                onClick={() => setMenuOpen(!menuOpen)}>
                <img src={MenuIcon} width="100%" alt="menu-icon" />
              </div>
              <div className="layout-header__mobile-menu__menu" style={{ height: menuOpen ? 317 : 0 }}>
                <div className="layout-header__mobile-menu__menu-item">Trade</div>
                <div className="layout-header__mobile-menu__menu-item">Markets</div>
                <div className="layout-header__mobile-menu__menu-item">Support</div>
                <div className="layout-header__mobile-menu__menu-item">Affiliate Program</div>

                <div className="layout-header__mobile-menu__menu-divider"></div>

                <div className="layout-header__mobile-menu__menu-item">Log In</div>
                <div className="layout-header__mobile-menu__menu-item">Sign Up</div>
              </div>
            </>)}
          </div>
        </Container>
      </div>

      <Container maxWidth="lg">
        <div className="layout-body">
          {children}
        </div>
      </Container>

      <div className="layout-contact">
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <div className="layout-contact__title text-white text-lg">
                  Get In Touch<br /> With Us
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Input label="Name" initValue="John Doe" placeholder="John Doe" />
                <Input label="Email" initValue="johndoe@gmail.com" placeholder="johndoe@gmail.com" />
                <Input label="Message" initValue="Hi, I'm John" placeholder="Hi, I'm John" />
                <div className="layout-contact__recaptcha">
                  <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcfoJkbAAAAACnLaFMP-GajCEm1yCMyW9av1Wn3"
                  onChange={onChange}
                  />
                </div>
                <BorderButton>Submit</BorderButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div className="layout-contact__live-chat">
          <img src={LiveChatIcon} alt="live-chat-icon" width="100%" />
        </div>
      </div>

      <div className="layout-footer">
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item md={6}>
              <Logo />
              <div className="text-light text-sm layout-footer__logo-bottom-text">
                The perfect place to diversify<br /> your crypto portfolio within minutes
              </div>
            </Grid>
            <Grid item md={6}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <div className="text-white text-button layout-footer__link">Markets</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="text-white text-button layout-footer__link">Trade &amp; Earn</div>
                  <div className="text-white text-button layout-footer__link">Exchange</div>
                  <div className="text-white text-button layout-footer__link">Fees</div>
                  <div className="text-white text-button layout-footer__link">Terms Of Use</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="text-white text-button layout-footer__link">Knowledge Base</div>
                  <div className="text-white text-button layout-footer__link">Videos</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <div className="layout-footer__social-icons-1">
                <img src={SocialIcon1_1} alt="social-icon-1-1" className="layout-footer__social-icon" width={40} />
                <img src={SocialIcon1_2} alt="social-icon-1-2" className="layout-footer__social-icon" width={40} />
                <img src={SocialIcon1_3} alt="social-icon-1-3" className="layout-footer__social-icon" width={40} />
              </div>
              <div className="layout-footer__social-icons-2">
                <img src={SocialIcon2_1} alt="social-icon-2-1" className="layout-footer__social-icon" width={40} height={40} />
                <img src={SocialIcon2_2} alt="social-icon-2-2" className="layout-footer__social-icon" width={40} height={40} />
                <img src={SocialIcon2_3} alt="social-icon-2-3" className="layout-footer__social-icon" width={40} height={40} />
                <img src={SocialIcon2_4} alt="social-icon-2-2" className="layout-footer__social-icon" width={40} height={40} />
                <img src={SocialIcon2_5} alt="social-icon-2-3" className="layout-footer__social-icon" width={40} height={40} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
