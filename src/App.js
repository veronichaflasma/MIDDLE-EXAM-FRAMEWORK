import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import store from './store'
import './App.css'
import Home from './containers/Home'
import Navbar from './containers/Navbar'
import Footer from './containers/Footer'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import About from './components/About'

class App extends Component{
  render(){
      return(
        <BrowserRouter>
        <Provider store={store}>
            <div >
              <Navbar/>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Products} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/about"><About/></Route>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/login" component={Login}/>
                    {/* <PublicRoute path="/login" component={Login} />
                    <PrivateRoute path="/account" component={Account} />
                    <PrivateRoute path="/checkout" component={Checkout} /> */}
                  </Switch>
              <Footer/>
            </div>
            </Provider>
       </BrowserRouter>
      )
  }
}



export default App

