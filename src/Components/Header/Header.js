import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { useStateValue } from '../StateProvider/StateProvider';
import './Header.css'
import Navigation from './Navigation';

const Header = () => {
  const[{user},dispatch] = useStateValue();
  const[{basket},basketDispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user){
      auth.signOut();
  }
  }
    return (
        <Navbar bg="light" expand="lg">
        <Navigation></Navigation>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="router-link" to="/home">Home</Link>
            {
              basket?.length?<Link className="router-link" to='/order-review'>Order Review</Link>:<Link className="router-link" to="/order-review" disabled>Order Review</Link>
            }
            {
              user?<Link className="router-link" to="/inventory">Manage Inventory</Link>:<Link className="router-link-disabled" disabled>Manage Inventory(You need to be logged in for accessing Inventory)</Link>
            }
            <Link className="router-link" onClick={handleAuthentication} to={user?"/":"/login"}>{user?"Sign Out":"Log In/Sign Up"}</Link>
            {user&& <Link className="router-link" >Hello! {user?.userName||user?.displayName}</Link> }

          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;