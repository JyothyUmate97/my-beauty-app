import "./scss/index.scss";

import * as React from "react";
import { SocialMediaIcon } from "../app/routes";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <Nav />
    <div className="footer__favicons container">
      <Container>
        <Row>
          <Col xs={6} md={6}>
            <div style={{marginTop: '25px'}}>
            © 2021 My Beauty 365
            </div>
          </Col>
          <Col xs={6} md={6}>

            {SOCIAL_MEDIA.map(medium => (
              <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
            ))}
            
          </Col>
          
        </Row>
      </Container>
    </div>
    
  </div>
);

export default Footer;
