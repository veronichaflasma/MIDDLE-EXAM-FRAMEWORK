import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../action/cartActions";
import { fetchProducts } from "../action/productActions";
import FilterProducts from "./FilterProducts";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map((product) => (
        <div className="col-sm-6 col-md-4 product" key={product.id}>
            <a href="#favorites" className="favorites" data-favorite="inactive">
                <i className="ion-ios-heart-outline"/>
            </a>
            <a href="./">
              <img src={product.img} alt={product.title}/>
            </a>
            <div className="content">
                <h1 className="h4">{product.title}</h1>
                <p className="price">{util.formatCurrency(product.price)}</p>
                <div>
                <label>{product.category}</label>
                <button className="btn btn-primary btn-rounded btn-sm" 
                  onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>
                  <i className="ion-bag"/> Add to cart
                </button>
                </div>
                
            </div>
        </div>
    ));

    return (
      <div>
        <div className="container">
          <div className="row">
            {/* Products */}
            <div className="col-sm-12 products">
              <hr className="offset-lg" />
              <FilterProducts />
              <div className="row">
              {productItems}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);