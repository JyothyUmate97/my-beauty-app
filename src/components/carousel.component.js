import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeBanner1 from '../images/home-banner-1.jpg';
import homeBanner2 from "../images/home-banner-2.jpg";
import homeBanner3 from "../images/home-banner-3.jpg";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={homeBanner1} />
                </div>
                <div>
                    <img srcSet={homeBanner2}/>
                </div>
                <div>
                    <img src={homeBanner3} />
                </div>
            </Carousel>
        </div>
    );
}