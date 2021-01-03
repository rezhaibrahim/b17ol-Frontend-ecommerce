import React from 'react';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import promo1 from '../assets/img/promo1.png'
import promo2 from '../assets/img/promo2.png'

import {Container} from 'reactstrap'
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
    promo1, promo2, promo1, promo2
];


const CarouselCategory = ({category}) => {
    // console.log("cek:",category);
    const {REACT_APP_URL} = process.env
    return (
        <Container>
        
            <div>
                <span className="h2 font-weight-bold">Category</span>
            </div>
            <div>
                <span className="text-muted h6 small">What are you currently looking for</span>
            </div>
            <Carousel
            ssr
            partialVisbile
            responsive={responsive}
            showDots={false}
            itemClass="carousel-item-margin-right-20-px"
        >
            {category.map(category => {
                // console.log(`${REACT_APP_URL}${category.image.slice(1)}`)
                return (
                    <div >
                    <Image
                        draggable={true}
                        size={"small"}
                        style={{ width: "100%", height: "100%", padding: "10px" }}
                        src={`${REACT_APP_URL}${category.image.slice(1)}`}
                    />
                    </div>
                    
                );
            })}
        </Carousel>
        </Container>
        
    );
};

export default CarouselCategory;
