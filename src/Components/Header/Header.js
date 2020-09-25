import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { auth } from '../../firebaseConfig';
import { useStateValue } from '../StateProvider/StateProvider';

const Header = () => {
  const[{user},dispatch] = useStateValue()
  const handleAuthentication = () => {
    if(user){
      auth.signOut();
  }
  }
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/order-review">Order Review</Nav.Link>
            <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
            <Nav.Link onClick={handleAuthentication} href={user?"/":"/login"}>{user?"Sign Out":"Log In/Sign Up"}</Nav.Link>
            {user&& <Nav.Link>Hello! {user?.userName||user?.displayName}</Nav.Link> }

          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;