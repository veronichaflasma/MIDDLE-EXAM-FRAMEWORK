import React, { Component } from 'react'


class App extends Component{
  render(){
      return(
        <div>
        <div className="container">
            <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                <h1 className="align-center">Returning Customer</h1>
                <br />
                <form className="signin" action="index.php" method="post">
                <input type="email" name="email" defaultValue placeholder="E-mail" required className="form-control" />
                <br />
                <input type="password" name="password" defaultValue placeholder="Password" required className="form-control" />
                <br />
                <button type="submit" className="btn btn-primary">Sign In</button>
                <a href="#forgin-password" data-action="Forgot-Password" className="xs-margin">Password recovery &gt;</a>
                <br /><br />
                <p>
                    If you already have an account with us, please login.
                </p>
                <hr className="offset-xs" />
                <a href="#facebook" className="btn btn-facebook"> <i className="ion-social-facebook" /> Login with Facebook </a>
                <hr className="offset-sm" />
                </form>
            </div>
            </div>
        </div>
        <br /><br />
        <br className="hidden-xs" />
        <br className="hidden-xs" />
        </div>

      )
  }
}

export default App
