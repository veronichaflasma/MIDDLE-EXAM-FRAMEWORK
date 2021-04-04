import React from 'react'

const About = () => {
      return(
        <div>
        <div className="blog">
            <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6 item">
                <div className="body">
                    <a href="#" className="view"><i className="ion-social-usd-outline" /></a>
                    <a href="#">
                    <img src="assets/img/image_biodata.png" alt="biodata" title="me" />
                    </a>
                </div>
                </div>
                <div className="col-sm-6 col-md-6 item">
                <div className="body">
                    <div className="caption">
                    <h1 className="h3">Flasma Veronicha Hendryanna</h1>
                    <label> 1841720217</label>
                    <hr className="offset-sm" />
                    <p>Name          : Veronicha</p>
                    <p>Address       : Malang</p>
                    <p>Date of Birth : 25 April 2000</p>
                    <p>Email         : veronichaflasma@gmail.com</p>
                    <hr className="offset-sm" />
                    <a href="https://www.polinema.ac.id/"> Politeknik Negeri Malang <i className="ion-ios-arrow-right" /> </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        </div>

      )
  }

export default About
