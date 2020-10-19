import { Carousel } from 'bootstrap';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Sticky, StickyContainer } from 'react-sticky';
import { CategoryContext } from '../../App';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import CarouselSlider from './CarouselSlider/CarouselSlider';
import './Home.css'
const Home = () => {
    const [category,setCategory] = useContext(CategoryContext)
    const fdata = fakeData.slice(0,10)
    const data = fdata.filter(data=>data.category===category)
    return (
        <Container className="products">
            <Row>
            <CarouselSlider></CarouselSlider>
            </Row>
        <Row>
            
            <Col>
            { 
             
            (category==='' || category === 'All Items')?
               fdata.map(data=><Shop data={data} key={data.key} ></Shop> )
               :
               data.map(data=><Shop data={data} key={data.key} ></Shop> )
            }
            </Col>
        </Row>
       </Container>
        
    );
};

export default Home;