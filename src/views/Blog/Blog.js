import "./scss/index.scss";
import * as React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => (
    <div className="mt-4">
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <Card className="card-blog">
                        <Card.Body>
                            <Card.Title>Beauty Issue Vol. 1</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">My Beauty Blog</Card.Subtitle>
                            <Card.Text>
                            Informed decisions are best decisions. Before you start looking ...
                            </Card.Text>
                            <Card.Link className="link_color">
                                <Link to={'/blogone/'} > Read full blog  </Link>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card className="card-blog">
                        <Card.Body>
                            <Card.Title>Beauty Issue Vol. 2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">My Beauty Blog</Card.Subtitle>
                            <Card.Text>
                            Before you start looking at skincare products based on their beautiful ...
                            </Card.Text>
                            <Card.Link className="link_color">
                            <Link to={'/blogtwo/'} > Read full blog   </Link>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            
            </Row>
        </Container>   
    </div
);

export default Blog;