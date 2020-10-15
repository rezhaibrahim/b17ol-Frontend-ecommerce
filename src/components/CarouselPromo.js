import React from 'react';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import promo1 from '../assets/img/promo1.png'
import promo2 from '../assets/img/promo2.png'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const images = [
    promo1,promo2,promo1,promo2
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = () => {
    return (
        <Carousel
            ssr
            partialVisbile
            responsive={responsive}
            infinite
            showDots={true}
            
        >
            {images.slice(0, 5).map(image => {
                return (
                    <Image
                        draggable={true}
                        style={{ width: "100%", height: "100%",padding:"10px" }}
                        src={image}
                    />
                );
            })}
        </Carousel>
        
    );
};

export default Simple;
