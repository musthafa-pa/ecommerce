import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import mainStore from './store/Mainstore';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

//Main App file.
//Wrapped inside redux global provider
//Defined routes
export default function App(){
  return(
    <Provider store={mainStore}>
      <Router basename="ecommerce">
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route> 
        <Route exact path="/cart" component={Cart}></Route>
      </Router>
    </Provider>
  )
}
