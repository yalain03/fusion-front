import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container mt-5">
            <div className="row justify-content-center">             
                <div className="col-4 offset-3 col-sm-2">
                    {/* <h5>Links</h5> */}
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 offset-2">
                    {/* <h5>Our Address</h5> */}
                    <address>
		              <p>1524 E Brokers Ave., New York City</p>
		              <p>{/*<i className="fa fa-phone fa-lg"></i>: */}Tel: 555 555 5555</p>
		              <p>{/*<i className="fa fa-fax fa-lg"></i>: */}Fax: 555 555 5556</p>		              
                    </address>
                </div>                
            </div>
            <div className="mailing">
                <p>{/*<i className="fa fa-envelope fa-lg"></i>: */}<a className="email" href="mailto:confusion@food.net">
                         dicarpaccio@domain.net</a></p>
                </div>
        </div>
    </div>
    )
}

export default Footer;