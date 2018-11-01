import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Button, Breadcrumb, BreadcrumbItem,
    Row, Col, Modal, Label, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import Pagination from "react-js-pagination";

const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || (val.length >= len);
const maxLength = (len) => (val) => !val || (val.length <= len);
const isNumber = (val) => !isNaN(Number(val));

function RenderDish({dish}) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments, postComment, dishId, putComment, removeComment, auth }) {
    if (comments != null) {
        if (auth.isAuthenticated)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            if (auth.user.username === comment.author.username)
                                return (
                                    <li key={comment._id}>
                                        <p>{comment.rating} stars</p>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author.username}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                        <UpdateForm commentId={comment._id} putComment={putComment} removeComment={removeComment} />
                                    </li>
                                );
                            else 
                                return (
                                    <li key={comment._id}>
                                        <p>{comment.rating} stars</p>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author.username}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                    </li>
                                );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
            );
        else
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment._id}>
                                    <p>{comment.rating} stars</p>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author.username}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.comment);
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="lnr lnr-pencil"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
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
        );
    }
}

class UpdateForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.putComment(this.props.commentId, values.rating, values.comment);
    }

    handleDelete() {
        this.props.removeComment(this.props.commentId);
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="lnr lnr-pencil"></span> Edit
                </Button>
                <Button outline onClick={this.handleDelete}>
                    <span className="lnr lnr-trash"></span> Delete
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Edit</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
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
                                    Save
                                </Button>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
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
                        <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish._id}
                            putComment={props.putComment} removeComment={props.removeComment} auth={props.auth} />
                        {/* <CommentForm dishId={props.dish.id} addComment={props.addComment} />                         */}
                    </div>       
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

export default DishDetail;