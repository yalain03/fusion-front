import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-5 col-md-12 p-r-5">
                    <div className="follow_us">
                        <ul>
                            <li>Follow us</li>
                            <li>
                                <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">
                                <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/">
                                <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 ml-lg-auto">
                    <h5>Links</h5>
                    <ul className="links">
                        <li>
                            <a href="#">About</a>
                        </li>
                        
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">Signup</a>
                        </li>
                        
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5>Contact Us</h5>
                    <ul className="contacts">
                        <li>
                            <a href="mailto:contactdmin@dicarpaccio.com">
                            <i className="fas fa-envelope"></i> contact@dicarpaccio.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <div id="copy">© 2018 Ristorante Di Carpaccio</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;