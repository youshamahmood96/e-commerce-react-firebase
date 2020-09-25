import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import './Shop.css'

const Shop = (props) => {
    const {name,price,seller,img,key} = props.data;
    const[{basket},dispatch] = useStateValue();
    const location = useLocation();
    const addToBasket =()=>{
        dispatch({
            type:"Add-to-basket",
            item:{
                id:key,
                name:name,
                img:img,
                price:price,
                seller:seller
            }
        })
        
    }
    const removeFromBasket = () => {
        dispatch({
            type: 'Remove-from-basket',
            id:key,
        })
    }
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
                {
                (location.pathname === '/'||location.pathname === '/home')&&
                (<button onClick={addToBasket} className="button" >
                Add to Cart
                </button>)
                }
                {
                    (location.pathname === '/order-review')&&
                    (
                        <button onClick={removeFromBasket} className="button" >
                        Remove
                        </button>
                    )
                }
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;