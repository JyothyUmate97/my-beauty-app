import * as React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Skincaretest() {
    return (
        <div>
            <div class="article-page">
            <div class="container">
                <ul class="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li class="breadcrumbs__active"><a href="/skincaretest" style={{fontWeight:"bold"}}>Skin Type Test</a></li>
                </ul>
            </div>
            <div class="article-page__header"><span class="article-page__header__title">
                    <p></p>
                    <h1>Skin Type Test</h1>
                </span></div>
            <div class="container">
                <div class="article-page__container">
                    <div class="article-page__content">
                        <div>
                            <p>Before you continue to add to cart, what products are you looking for? Test your skin
                                type to determine what you need to use, daily! You’ll see the right products hit
                                differently.&nbsp;&nbsp;</p>
                            <p></p>
                            <p>We all have different skin types, so to get the glow, determine whether you’re
                                combination, oily or dry by taking our skin quiz. We’ll put together the perfect package
                                for you!&nbsp;</p>
                            <p></p>
                        </div>
                    </div>
                    <div class="article-page__navigation">
                        <ul>
                            <li class="article-page__navigation-element"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
}