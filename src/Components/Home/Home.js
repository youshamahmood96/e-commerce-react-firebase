
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import fakeData from '../../fakeData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shop from '../Shop/Shop';
import './Home.css';
import carousel1 from '../../images/carousel1.png'
import carousel2 from '../../images/carousel2.png'
import carousel3 from '../../images/carousel3.png'
import carousel4 from '../../images/carousel4.png'
import carousel5 from '../../images/carousel5.png'
import Slider from 'react-slick';
const Home = () => {
    const [category,] = useContext(CategoryContext)
    const fdata = fakeData.slice(0,10)
    const data = fdata.filter(data=>data.category===category)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "linear"
      };
    return (
        <div className="products">
        <Container >
        
        {
            category === '' && (
                <div className="works" >
        <Slider {...settings}>
          <div>
            <img src = {carousel1} alt='1'/>
          </div>
          <div>
          <img src = {carousel2} alt='2'/>
          </div>
          <div>
          <img src = {carousel3} alt='3'/>
          </div>
          <div>
          <img src = {carousel4} alt='4'/>
          </div>
          <div>
          <img src = {carousel5} alt='5'/>
          </div>
        </Slider>
      </div>
            )
        }
        
        <Row>
            <Col>
            {  (category==='' || category === 'All Items')?
               fdata.map(data=><Shop data={data} key={data.key} ></Shop> )
               :
               data.map(data=><Shop data={data} key={data.key} ></Shop> )
            }
            </Col>
        </Row>
       </Container>
        </div>
        
    );
};

export default Home;