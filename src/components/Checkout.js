import React, { Component } from 'react'

class Checkout extends Component{
  render(){
      return(
      <div>
        <div className="box">
          <div className="container">
            <h1>Checkout order</h1>
          </div>
        </div>
        <hr className="offset-md" />

        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4" >

              </div>

              <div className="col-sm-5" >
                <hr className="offset-sm visible-sm" />
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2 className="no-margin">Summary</h2>
                    <hr className="offset-md" />
                    <div className="container-fluid">

                      <div className="input-group">
                          <input type="text" className="form-control input-sm" placeholder="Name" />
                          <span className="input-group-btn">
                            <button className="btn btn-primary btn-sm" type="button">OK</button>
                          </span>
                      </div><hr />
                      <div className="input-group">
                          <input type="text" className="form-control input-sm" placeholder="Address"/>
                          <span className="input-group-btn">
                            <button className="btn btn-primary btn-sm" type="button">OK</button>
                          </span>
                      </div><hr />

                      <div className="row">
                        <div className="col-xs-6">
                          <p>Subtotal (7 items)</p>
                          <p>Discount</p>
                          <p>Delivery</p>
                        </div>
                        <div className="col-xs-6">
                          <p><b>Rp. 1499</b></p>
                          <p><b>Rp. 0</b></p>
                          <p><b>Rp. 0</b></p>
                        </div>
                      </div>
                    </div>
                   
                    <hr />
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-6">
                          <h3 className="no-margin">Total sum</h3>
                        </div>
                        <div className="col-xs-6">
                          <h3 className="no-margin">$1499</h3>
                        </div>
                      </div>
                    </div>
                    <hr className="offset-md" />
                    <button className="btn btn-primary btn-lg justify"><i className="ion-compose" />&nbsp;&nbsp; Confirm order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="offset-lg" />
          <hr className="offset-lg" />
        </div>

      </div>

      )
  }
}

export default Checkout
