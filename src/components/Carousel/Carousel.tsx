import React from "react";
import RMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselLeftButtonImage from '../../assets/Svg/carousel-left-button.svg';
import CarouselRightButtonImage from '../../assets/Svg/carousel-right-button.svg';


const Carousel: React.FC = ({ children }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const CustomRightArrow = ({ onClick = () => { } }) => {
        return (
            <div className="carousel-right-arrow" onClick={onClick}>
                <img src={CarouselRightButtonImage} alt="carousel-right-button" width="100%" />
            </div>
        );
    };

    const CustomLeftArrow = ({ onClick = () => { } }) => {
        return (
            <div className="carousel-left-arrow" onClick={onClick}>
                <img src={CarouselLeftButtonImage} alt="carousel-left-button" width="100%" />
            </div>
        );
    };

    return (
        <RMultiCarousel
            responsive={responsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            infinite={true}
            containerClass="overflow-hidden"
            sliderClass="overflow-hidden"
        >
            {children}
        </RMultiCarousel>
    );
};

export default Carousel;
