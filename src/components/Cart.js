import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart, handleMinus, handlePlus} from "../action/cartActions";
import Summary from "./Summary";
import { fetchCart } from "../action/cartActions";

class Cart extends Component {
  // componentDidMount() {
  //   this.props.fetchCart();
  // }

  render() {
    const { cartItems } = this.props;
    return (
    <div>
      <hr className="offset-md" />
      <div className="box">
        <div className="container">
          <h1>Shopping Cart</h1>
          <hr className="offset-sm" />
        </div>
      </div>
      <hr className="offset-md" />
      {/* container */}
      <div className="container">
        <div className="row">
          {/* cart */}
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="checkout-cart">
                  <div className="content">
                  {cartItems.length === 0 ? (
                      "Cart is empty"
                    ) : (
                      <div>
                          <b>You have {cartItems.length} items in the Cart.{" "}</b>
                        <hr />
                      </div>
                    )}

                    {cartItems.length > 0 && (
                    <div>
                      
                      {cartItems.map((item) => (
                        <div key={item.id}>
                        <hr />

                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img
                                  className="media-object"
                                  src={item.img}
                                  alt={item.title}
                                />
                              </a>
                            </div>

                            <div className="media-body">
                              <h2 className="h4 media-heading">
                              {item.title}
                              </h2>
                              <label>category: {item.category}</label>
                              <p className="price">{util.formatCurrency(item.price)}</p>

                            </div>
                            <div className="media-body">
              
                              {/* <p className="price">{util.formatCurrency(item.total_qty)}</p> */}

                            </div>

                            <div className="controls ">
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button
                                    className="btn btn-default btn-sm"
                                    type="button"
                                    data-action="minus"
                                    onClick={(e) =>
                                      this.props.handleMinus(this.props.cartItems, item)}
                                  >
                                    <i className="ion-minus-round" />
                                  </button>
                                </span>
                                <input type="text" className="form-control input-sm" 
                                        placeholder="Qty" value={item.count} /> 
                                        
                                <span className="input-group-btn">
                                  <button
                                    className="btn btn-default btn-sm"
                                    type="button"
                                    data-action="plus"
                                    onClick={(e) =>
                                      this.props.handlePlus(this.props.cartItems, item)}
                                  >
                                    <i className="ion-plus-round" />
                                  </button>
                                </span>
                              </div>
                     
                              {/* remove */}
                              <a href="" onClick={(e) =>
                                  this.props.removeFromCart(this.props.cartItems, item)
                                }>
                                {" "}
                                <i className="ion-trash-b" 
                                /> 
                                Remove{" "}
                              </a>
                            
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end cart */}

          {/* checkout */}
         
          <div className="col-sm-10 col-md-4">
            <hr className="offset-md visible-sm" />
            <div className="panel panel-default">
              <div className="panel-body">
                {/* <h2 className="no-margin">Summary</h2> */}
                <hr className="offset-md" />

                <div className="container-fluid">
                  
                  <div className="row">
                    <div className="col-xs-6">
                      <b>Products</b>
                    </div>
                  
                    <div className="col-xs-6">
                     <b>Sub Total</b>
                    </div>
                  </div>

                  {cartItems.map((item) => (
                  <div key={item.id}>
                  
                  <div className="row">
                    <div className="col-xs-6">
                      <p>{item.title}</p>
                    </div>
                    <div className="col-xs-6">
                      <p>qty : {item.count}</p>
                    </div>
                    <div className="col-xs-6">
                      <p>
                      {util.formatCurrency(item.price*item.count)}
                      </p>
                    </div>
                    
                  </div>
                </div>))}
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-4">
                      <h3>Total</h3>
                    </div>
                    <div className="col-xs-9">
                      <h3 className="no-margin">
                        {util.formatCurrency(
                          cartItems.reduce((a, c) => a + c.price * c.count, 0)
                        )}
                        </h3>
                    </div>
                  </div>
                </div>
                <hr className="offset-md" />
                <a href="/checkout" className="btn btn-primary btn-lg justify">
                  <i className="ion-android-checkbox-outline" />
                  &nbsp;&nbsp; Checkout order
                </a>
                <hr className="offset-md" />
                    
                  </div>
                </div>

            
          </div>
          
          {/* end checkout */}
        </div>
      </div>
      {/* end container */}
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, {fetchCart, addToCart, removeFromCart, handleMinus, handlePlus})(Cart);
