import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Shop.css'

const Shop = (props) => {
    const {name,price,seller,img,key} = props.data;
    return (
        <Container className="shop">
            <Row>
                <Col sm={2}>
                <img className="img-fluid" src={img} alt="product"></img>
                </Col>
                <Col sm={10}>
                <h3>{name}</h3>
                <p>by:{seller}</p>
                <p>price: $ {price}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;