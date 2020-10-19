import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Shop.css'

const Shop = (props) => {
    const {name,price,seller,img,key} = props.data;
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
    return (
        <div className="shop-holder">
        <div className="shop">
        <img className="img-fluid" src={img} alt="product"></img>
        <h5>{truncate(name,20)}</h5>
        <p> $ {price}</p>
        </div>
        </div>
    );
};

export default Shop;