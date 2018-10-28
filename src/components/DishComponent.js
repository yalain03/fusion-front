import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row, Col } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len); 
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class NewDish extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(name, label, category, price, description) {
        const errors = {
            name: '',
            label: '',
            category: '',
            price: '',
            description: ''
        }

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name of dish should be >= 3';
        if (this.state.touched.name && name.length > 30)
            errors.name = 'Name of dish should be <= 30';

        const reg = /^\d+$/;
        if (this.state.touched.price && !reg.test(price))
            errors.telnum = 'Price should contain numbers only';

        if (this.state.description && description.length < 10)
            errors.description = 'Description should be at least 10 characters long';
    }

    handleSubmit() {
        this.props.createDish({name: this.name.value, label: this.label.value, category: this.category.value,
            price: this.price.value, description: this.description.value});
    }

    render() {
        return (
            <div className="container">  
                <div className="row row-content">
                   <div className="col-12">
                      <h3>New Dish</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3),
                                            maxLength: maxLength(30)
                                        }}
                                         />
                                        <Errors 
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".label" name="label"
                                        className="form-control">
                                        <option>Hot</option>
                                        <option>New</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".category" name="category"
                                        className="form-control">
                                        <option>Entree</option>
                                        <option>Appetizer</option>
                                        <option>Main</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="price" md={2}>Price</Label>
                                <Col md={10}>
                                    <Control.text model=".price" id="price" name="price"
                                        placeholder="price"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".price"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={2}>Description</Label>
                                <Col md={10}>
                                    <Control.textarea model=".description" id="description" name="description"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(10)
                                        }} />
                                        <Errors 
                                            className="text-danger"
                                            model=".description"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters'
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Create Dish
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
               </div>
            </div>
        );
    }
}

export default NewDish;