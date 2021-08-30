import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import facebookicon from "../../images/facebook-icon.svg";
import instagramicon from "../../images/instagram-icon.svg";
import twittericon from "../../images/twitter-icon.svg";
import youtubeicon from "../../images/youtube-icon.svg"
import Logo from "../../images/Beauty_Logo_Small.svg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    // <div>
    //   <h1>This is footer</h1>
    // </div>
    <div>
      <div className="footer-nav">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <div className="storefront-logo-footer">
                    <div>
                      <img src={Logo} />
                    </div>
                  </div>
                </div>
              </div>
              <Col md={6}>
                <Row>
                  <Col md={6} >
                    <div className="footer-nav__section">
                      <h4 className="footer-nav__section-header"><span>MB365</span></h4>
                      <div class="footer-nav__section-content">
                        <p><a href="/page/about/">About</a></p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={2} >
                <ul>
                  <li><a href="/blog/"> Blogs</a></li>
                  <li><a href="/quizz/"> Quizz</a></li>
                </ul>
              </Col>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__favicons " style={{ backgroundColor: "#fdb4b44d" }}>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div style={{ marginTop: "25px" }}>© 2021 My Beauty 365</div>
            </Col>
            <Col md={6} sm={12} >
              <a href="https://www.facebook.com/My-Beauty-365-105739448279724"
                target="_blank" aria-label="facebook">
                <div className="social-icon">
                  <div>
                    <img src={facebookicon} className="socialicon-img" />
                  </div>
                </div>
              </a><a href="https://www.instagram.com/my_beauty_365/" target="_blank"
                aria-label="instagram">
                <div className="social-icon">
                  <div>
                    <img src={instagramicon} className="socialicon-img" />
                  </div>
                </div>
              </a><a href="https://twitter.com/My_Beauty_365" target="_blank" aria-label="twitter">
                <div className="social-icon">
                  <div>
                    <img src={twittericon} className="socialicon-img" />
                  </div>
                </div>
              </a><a href="https://www.youtube.com/channel/UC8Il_TI2P-Pol6nuST7j8AQ" target="_blank"
                aria-label="youtube">
                <div className="social-icon">
                  <div>
                    <img src={youtubeicon} className="socialicon-img" />
                  </div>
                </div>
              </a>
            </Col>
            {/* </div> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
