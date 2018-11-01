import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isSignupOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.toggleSignup = this.toggleSignup.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }

    toggleSignup() {
        this.setState({
            isSignupOpen: !this.state.isSignupOpen
        });
    }

    handleSignup(event) {
        this.toggleSignup();
        if (this.password.value === this.confirm.value)
            this.props.signup({firstname: this.firstname.value, lastname: this.lastname.value, 
                username: this.username.value, password: this.password.value});
        else
            alert('The passwords don\'t match');
        event.preventDefault();
    }

  render() {
    return(
        <div>
                <Navbar  expand="md"  className="header">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Di Carpaccio Ristorante' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>{/*<span className="lnr lnr-home"></span> */} Home</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="lnr lnr-license"></span> About Us</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'>{/*<span className="lnr lnr-list"></span> */} Menu</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="lnr lnr-phone-handset"></span> Contact Us</NavLink>
                            </NavItem> */}
                            </Nav>
                        </Collapse>

                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <div>
                                            <Button outline onClick={this.toggleModal}>
                                            <span className="lnr lnr-enter"></span> Login
                                                {this.props.auth.isFetching ?
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                            <Button outline onClick={this.toggleSignup} className="btn-right">
                                                <span className="lnr lnr-pencil"></span> Sign Up
                                            </Button>
                                        </div>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout} >
                                            <span className="lnr lnr-exit"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>                

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                {/* This is for registration */}

                <Modal isOpen={this.state.isSignupOpen} toggle={this.toggleSignup}>
                    <ModalHeader toggle={this.toggleSignup}>Sign up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name:</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name:</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="confirm">Confirm Password</Label>
                                <Input type="password" id="confirm" name="confirm"
                                    innerRef={(input) => this.confirm = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
    );
  }
}

export default Header;