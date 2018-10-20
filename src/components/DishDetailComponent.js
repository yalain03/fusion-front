import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Button, Breadcrumb, BreadcrumbItem,
    Row, Col, Modal, Label, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || (val.length >= len);
const maxLength = (len) => (val) => !val || (val.length <= len);

function RenderDish({dish}) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments != null) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const DishDetail = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <Button outline onClick={props.toggleModal}>
                            <span className="fa fa-pencil fa-lg"></span> Submit Comment
                        </Button>
                    </div>       
                    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
                        <ModalHeader toggle={props.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup className="form-group">
                                    <Label htmlFor="name">Your Name</Label>
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
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
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="12"
                                            className="form-control" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                </FormGroup>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default DishDetail;