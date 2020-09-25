import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
const Home = () => {
    const data = fakeData.slice(0,10)
    console.log(data);
    return (
        <Container>
            <Row>
                <Col sm={9}>
                {
                    data.map(data=><Shop data={data} ></Shop> )
                }
                </Col>
                <Col sm={3}><Cart></Cart></Col>
            </Row>
        </Container>
    );
};

export default Home;