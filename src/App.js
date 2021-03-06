import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider/StateProvider';
import { auth } from './firebaseConfig';
import FinalOrder from './Components/FinalOrder/FinalOrder';
import ThankYou from './Components/ThankYou/ThankYou';
import Cart from './Components/Cart/Cart';

export const CategoryContext = createContext()

function App(props) {
  const [category,setCategory] = useState('')
  const [{},dispatch]= useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type: "Set-user",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "Set-user",
          user:null
        })
      }
      

    })

  },[])
  return (
    <Router>
    <div className="App">
    <CategoryContext.Provider value ={[category,setCategory]}>
    
    <Switch>
    <Route exact path='/'>
    <Header></Header>
    <Home></Home>
    </Route>
    <Route path='/home'>
    <Header></Header>
    <Home></Home>
    </Route>
    <Route path='/order-review'>
    <Header></Header>
    <OrderReview></OrderReview>
    </Route>
    <Route path='/inventory'>
    <Inventory></Inventory>
    </Route>
    <Route path='/login'>
    <Login></Login>
    </Route>
    <Route path='/cart'>
    <Cart></Cart>
    </Route>
    <Route path='/final-order'>
    <FinalOrder></FinalOrder>     
    </Route>
    <Route path='/thank-you'>
    <ThankYou></ThankYou>
    </Route>
    <Route path='*'>
    <NotFound></NotFound>
    </Route>
    </Switch>
    </CategoryContext.Provider>
    </div>
    </Router>
  );
}

export default App;
