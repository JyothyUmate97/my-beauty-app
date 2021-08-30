import * as React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <div>
            <div class="container">
                <ul class="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li class="breadcrumbs__active">
                        <a href="/myblog" style={{fontWeight:"bold"}}>The Blog</a>
                    </li>
                </ul>
            </div>
            <div class="article-page__header">
                <span class="article-page__header__title">
                    <p></p><h1>The Blog</h1></span>
            </div>
            <div class="container">
                <div class="article-page__container">
                    <div class="article-page__content">
                        <div><p>At My Beauty 365 we like to bring you all things beauty and wellness! Be in the know and level up with the latest in skincare, make-up, mental, physical and sexual wellness.&nbsp;</p>
                            <p></p>
                            <p>Our blog articles are here to inform, so that you can make educated decisions on what you want and need, because this year - it’s all about you!&nbsp;</p>
                            <p></p>
                        </div>
                    </div>
                    <div class="article-page__navigation"><ul><li class="article-page__navigation-element">
                    </li></ul>
                    </div>
                </div>
            </div>
        </div >
    );

}