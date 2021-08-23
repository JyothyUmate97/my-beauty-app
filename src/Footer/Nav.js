import * as React from "react";

import { NavLink } from "..";
import { TypedSecondaryMenuQuery } from "./queries";
import logoImg1 from "../../images/Beauty_Logo_Small.svg";
import ReactSVG from "react-svg";
import "./scss/index.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        <div className="container">
        <Container>
          <Row>
            <Col md={4}>
            <div>
              <ReactSVG path={logoImg1} className={'storefront-logo-footer'} />
            </div>
            </Col>
            <Col md={6}>
              <Row>
                
                  <TypedSecondaryMenuQuery>
                    
                      {({ data }) => {
                        
                        return data.shop.navigation.secondary.items.map(item => (
                          <Col md={6}>
                            <div className="footer-nav__section" key={item.id}>
                              
                                  <h4 className="footer-nav__section-header">
                                    <NavLink item={item} />
                                  </h4>
                                  <div className="footer-nav__section-content">
                                    {item.children.map(subItem => (
                                      <p key={subItem.id}><NavLink item={subItem} /></p>
                                    ))}
                                  </div>
                            </div>
                          </Col>
                        ));
                      }}
                  </TypedSecondaryMenuQuery>
                  
                
              </Row>
            </Col>
            <Col md={2}>
              <ul>
                <li><Link to={'/blog/'} > Blogs</Link></li>
                <li><Link to={'/quizz/'} > Quizz</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
          
          
        </div>
      </footer>
    );
  }
}

export default Nav;
