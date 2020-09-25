import React from 'react';
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
function App() {
  return (
    <Router>
    <div className="App">
    
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
    <OrderReview></OrderReview>
    </Route>
    <Route path='/inventory'>
    <Inventory></Inventory>
    </Route>
    <Route path='/login'>
    <Login></Login>
    </Route>
    <Route path='*'>
    <NotFound></NotFound>
    </Route>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
