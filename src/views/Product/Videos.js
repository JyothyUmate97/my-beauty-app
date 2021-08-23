import React from 'react';

// import { CarouselVideo } from "../../components";
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import { ProductDetails_product_videos } from './gqlTypes/ProductDetails';

const Videos: React.FC<{
  videos: ProductDetails_product_videos[];
}> = ({ videos }) => (
  <div className="product-page__other-products">
    <div className="container">
        <h4 className="product-page__other-products__title">
            Videos
        </h4>
        <div >
        {/* <CarouselVideo>
            {videos.map((video,index) => (
                <ReactPlayer 
                url={video.url} 
                controls={true}
                width='50%'
                height='50%'></ReactPlayer>
            ))}
           
        </CarouselVideo> */}
        

        <Carousel>
            {videos.map((video,index) => (
              <Carousel.Item style={{ marginLeft: 250 }}>
                <ReactPlayer 
                url={video.url} 
                playing={true}  
                controls={true}
                width='50%'
                height='50vh'
                ></ReactPlayer>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
    </div>
  </div>
 
);




export default Videos;