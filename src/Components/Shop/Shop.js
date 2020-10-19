import React from 'react';
import './Shop.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Col, Container, Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

const Shop = (props) => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const {name,price,seller,img,key} = props.data;
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
    return (
        <div className="shop-holder">
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Container>
          <Row>
           <Col sm={4}>
           <img className="img-fluid" src={img} alt="product"></img>
           </Col>
           <Col sm={8}>
           <h5>{name}</h5>
           <p>$ {price}</p>
           <p><span style={{fontWeight:'bold'}} >Seller:</span> {seller}  </p>
           </Col>
          </Row>
          </Container>
          
          
          </div>
        </Fade>
      </Modal>
        <div onClick={handleOpen} className="shop">
        <img className="img-fluid" src={img} alt="product"></img>
        <h5>{truncate(name,20)}</h5>
        <p> $ {price}</p>
        
      
        </div>
        </div>
    );
};

export default Shop;