import React, { Component } from 'react'
import { connect } from "react-redux";
import { filterProducts,sortProducts } from "../action/productActions";

class FilterProducts extends Component{
  render(){
      return(
        <div className="container tags" >
          <div className="pull-right">
            <label>
              <select
                className="btn btn-default btn-sm dropdown-toggle"
                value={this.props.sort}
                onChange={(event) => {
                  this.props.sortProducts(
                    this.props.filteredProducts,
                    event.target.value
                  );
                }}
              >
                <option value="">order by</option>
                <option value="lowestprice">Lowest to highest</option>
                <option value="highestprice">Highest to lowest</option>
              </select>
            </label>
          </div>
          {`${this.props.filteredProducts.length} products founds.`}

        <div></div></div>
      )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  category: state.products.category,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  FilterProducts
);