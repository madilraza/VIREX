import React from "react";
import { Grid } from "@material-ui/core";

import { Carousel, LandingItem, BorderButton, Token } from "../../components";

import VirexHomepageScreenshot from '../../assets/Svg/virex-homepage-screenshot.svg';
import BattleImage from '../../assets/Svg/battle.svg';
import CryptoPowerImage from '../../assets/Svg/crypto-power.svg';
import FlowerImage from '../../assets/Svg/flower.svg';

import CoinMarketCapLogo from '../../assets/Svg/featuredin/coinmarketcap-white.svg';
import CoinGeckoLogo from '../../assets/Svg/featuredin/coingecko.webp';
import CryptoCompareLogo from '../../assets/Svg/featuredin/cryptocomparelogo.png';
import VirexLogo from '../../assets/Svg/logo.svg';
import PancakeSwapLogo from '../../assets/Svg/featuredin/pancakeswaplogo.png';
import DappLogo from '../../assets/Svg/featuredin/dapp.png';
import HuobiLogo from '../../assets/Svg/featuredin/huobi.png';
import OSLLogo from '../../assets/Svg/featuredin/osl.png';

import { items, tokens } from './config';

const Landing: React.FC = () => {

  return (
    <div className="landing-page">
      <div className="landing-page__part-1 landing-page__part">
        <Grid container>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <div className="landing-page__part-1__title text-white text-lg text-center">
              Virex, The Exchange For Smart
              Crypto Warriors
            </div>
            <div className="landing-page__part-1__paragraph text-white text-sm text-center">
              Buy and sell cryptocurrencies no matter where you are in the world privately, securely and safely in no time at all. Virex is THE exchange for strong and smart crypto warriors looking to diversify their portfolios.
            </div>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
        </Grid>

        <div className="landing-page__part-1__button-view">
          <BorderButton pink>Get Started</BorderButton>
        </div>
      </div>

      <div className="landing-page__part-2 landing-page__part">
        <div className="landing-page__part-2__image-container">
          <div className="landing-page__part-2__image-container-image">
            <img src={VirexHomepageScreenshot} alt="virex-homepage-screenshot" />
          </div>
        </div>
      </div>

      <div className="landing-page__part-3 landing-page__part">
        <div className="landing-page__part-3__header">
          <div className="landing-page__part-3__header-title text-white text-lg text-center">
            Virex' Viral Factors
          </div>
          <div className="landing-page__part-3__header-paragraph text-white text-sm text-center">
            Unrivalled features make Virex the best place to start trading
          </div>
        </div>

        <div className="landing-page__part-3__content">
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <LandingItem image={items[0].image} title={items[0].title} paragraph={items[0].paragraph} direction />
            </Grid>
            <Grid item xs={12} md={6}>
              <LandingItem image={items[1].image} title={items[1].title} paragraph={items[1].paragraph} direction={false} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LandingItem image={items[2].image} title={items[2].title} paragraph={items[2].paragraph} direction />
            </Grid>
            <Grid item xs={12} md={6}>
              <LandingItem image={items[3].image} title={items[3].title} paragraph={items[3].paragraph} direction={false} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LandingItem image={items[4].image} title={items[4].title} paragraph={items[4].paragraph} direction />
            </Grid>
            <Grid item xs={12} md={6}>
              <LandingItem image={items[5].image} title={items[5].title} paragraph={items[5].paragraph} direction={false} />
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="landing-page__part-4 landing-page__part">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <div className="landing-page__part-4__left">
              <div className="landing-page__part-4__title text-white text-lg">
                Crypto Warriors Diversify Their Portfolios
              </div>
              <div className="landing-page__part-4__paragraph text-light text-sm">
                If you own a single crypto asset, it’s time to get more strategic. Diversify your portfolio and increase exposure to unexpected good performance of other crypto assets.
              </div>
              <div className="landing-page__part-4__button-view">
                <BorderButton pink>Sign Up For Virex</BorderButton>
                <div className="button-space" />
                <BorderButton>Learn more</BorderButton>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={BattleImage} alt="landing-page__part-4__image" width="100%" />
          </Grid>
        </Grid>
      </div>

      <div className="landing-page__part-5 landing-page__part">
        <div className="landing-page__part-5__title text-white text-lg text-center">Virex Tokenomics</div>
        <Grid container spacing={10}>
          <Grid item xs={12} md={4}>
            <div className="text-white landing-page__part-5__content">
              <div className="text-white landing-page__part-5__content-title text-bold">
                10 Years Of Daily Farming
            </div>
              <div className="text-white landing-page__part-5__content-paragraph text-bold">
                We will distribute 10 million tokens in 10 years through different types of farming
            </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="text-white landing-page__part-5__content">
              <div className="text-white landing-page__part-5__content-title text-bold">
                Regulated &amp; Compliant
            </div>
              <div className="text-white landing-page__part-5__content-paragraph text-bold">
                Virex complies with all regulatory requirements including KYC and AML
            </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="text-white landing-page__part-5__content">
              <div className="text-white landing-page__part-5__content-title text-bold">
                Incentivised Fees
              </div>
              <div className="text-white landing-page__part-5__content-paragraph text-bold">
                We incentivize traders who create liquidity and trading volume on our platform to show our gratitude to them
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="landing-page__part-6 landing-page__part">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <img src={CryptoPowerImage} alt="landing-page__part-6__image" width="100%" />
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="landing-page__part-6__right landing-page__part">
              <div className="landing-page__part-6__title text-white text-lg text-right">
                The Power Of Crypto Staking
              </div>
              <div className="landing-page__part-6__paragraph text-light text-sm text-right">
                Take advantage of our staking services and be a part of the new economy. Hold your coins in Virex network to validate transactions and earn rewards like a champion!
              </div>
              <div className="landing-page__part-6__button-view">
                <BorderButton pink>Get Started</BorderButton>
                <div className="button-space" />
                <BorderButton>Learn more</BorderButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="landing-page__part-7 landing-page__part">
        <div className="landing-page__part-7__title text-white text-lg text-center">Featured In</div>
        <div className="landing-page__part-7__body">
          <div className="landing-page__part-7__body__logo-group">
            <img src={CoinMarketCapLogo} alt="coinmarketcap-logo" height="50px" className="landing-page__part-7__body__logo-group__logo" />
            <img src={CoinGeckoLogo} alt="coingecko-logo" height="60px" className="landing-page__part-7__body__logo-group__logo" />
            <img src={CryptoCompareLogo} alt="coingecko-logo" height="60px" className="landing-page__part-7__body__logo-group__logo" />
          </div>

          <div className="landing-page__part-7__body__logo-group">
            <img src={VirexLogo} alt="coinmarketcap-logo" height="40px" className="landing-page__part-7__body__logo-group__logo" />
            <img src={PancakeSwapLogo} alt="coingecko-logo" height="55px" className="landing-page__part-7__body__logo-group__logo" />
            <img src={DappLogo} alt="coingecko-logo" height="90px" className="landing-page__part-7__body__logo-group__logo" />
          </div>

          <div className="landing-page__part-7__body__logo-group">
            <img src={HuobiLogo} alt="coinmarketcap-logo" height="100px" className="landing-page__part-7__body__logo-group__logo" />
            <img src={OSLLogo} alt="coingecko-logo" height="100px" className="landing-page__part-7__body__logo-group__logo" />
          </div>
        </div>

        <div className="landing-page__part-7__body-mobile">
          <img src={CoinMarketCapLogo} alt="coinmarketcap-logo" height="50px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={CoinGeckoLogo} alt="coingecko-logo" height="60px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={CryptoCompareLogo} alt="coingecko-logo" height="60px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={VirexLogo} alt="coinmarketcap-logo" height="40px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={PancakeSwapLogo} alt="coingecko-logo" height="55px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={DappLogo} alt="coingecko-logo" height="90px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={HuobiLogo} alt="coinmarketcap-logo" height="100px" className="landing-page__part-7__body__logo-group__logo" />
          <img src={OSLLogo} alt="coingecko-logo" height="100px" className="landing-page__part-7__body__logo-group__logo" />
        </div>
      </div>

      <div className="landing-page__part-8 landing-page__part">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <div className="landing-page__part-8__left">
              <div className="landing-page__part-8__title text-white text-lg">
                Hodling Like A Warrior Towards Passive Income
              </div>
              <div className="landing-page__part-8__paragraph text-light text-sm">
                Staking is by far the easiest way to make money with cryptocurrencies without doing anything more than owning them! It’s profit without risks or high input cost.
              </div>
              <div className="landing-page__part-8__button-view">
                <BorderButton pink>Enter Virex</BorderButton>
                <div className="button-space" />
                <BorderButton>Learn more</BorderButton>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={FlowerImage} alt="landing-page__part-8__image" width="100%" />
          </Grid>
        </Grid>
      </div>

      <div className="landing-page__part-9 landing-page__part">
        <div className="landing-page__part-9__title text-white text-lg text-center">
          Popular Exchange Tokens On Virex
        </div>
        <div className="landing-page__part-9__body">
          <Carousel>
            <div className="landing-page__part-9__body__token-group">
              <Token image={tokens[0].image} title={tokens[0].title} />
              <Token image={tokens[4].image} title={tokens[4].title} />
            </div>
            <div className="landing-page__part-9__body__token-group">
              <Token image={tokens[1].image} title={tokens[1].title} />
              <Token image={tokens[5].image} title={tokens[5].title} />
            </div>
            <div className="landing-page__part-9__body__token-group">
              <Token image={tokens[2].image} title={tokens[2].title} />
              <Token image={tokens[6].image} title={tokens[6].title} />
            </div>
            <div className="landing-page__part-9__body__token-group">
              <Token image={tokens[3].image} title={tokens[3].title} />
              <Token image={tokens[7].image} title={tokens[7].title} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Landing;
