import './scss/index.scss';

import React from 'react';

import classNames from 'classnames';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ProductsFeatured } from '../../components';
import { generateCategoryUrl } from '../../core/utils';
import homeBanner1 from '../../images/home-banner-1.jpg';
import homeBanner2 from "../../images/home-banner-2.jpg";
import homeBanner3 from "../../images/home-banner-3.jpg";
// import { structuredData } from "../../core/SEO/Homepage/structuredData";
import noPhotoImg from '../../images/no-photo.svg';
import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from './gqlTypes/ProductsList';

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  
  // const images = shop === undefined ? [] : shop.homepageCollection.images
  return (
    <>
      {/* <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script> */}
      {/* static carousal */}
      <Carousel>
        <Carousel.Item>
          <Link to={'/quizz/'}>
            <img
              className="d-block w-100"
              src={ homeBanner1 }
              alt="First slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          {loading && !categories ? (
            <img
            className="d-block w-100"
            src={ homeBanner2 }
            alt="Second slide"
            />
          ) : (
            categoriesExist() && (
              <Link
                to={generateCategoryUrl(
                  categories.edges[0].node.id,
                  categories.edges[0].node.name
                )}
              >
                <img
                  className="d-block w-100"
                  src={ homeBanner2 }
                  alt="Second slide"
                />
              </Link>
            )
          )}
            
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ homeBanner3 }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Dynamic carousal */}
      {/* <div>
        <Carousel>
          {images.length > 0 ? (images.map((node) => (
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={ node.url }
              alt="First slide"
            />
            </Carousel.Item>
          ))):
            (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ homeBanner1 }
                  alt="First slide"
                />
              </Carousel.Item>
            )
          }
        </Carousel>
      </div> */}
      <ProductsFeatured />
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>Shop by category</h3>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${
                          category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                        })`,
                      }}
                    />
                    <h3>{category.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
