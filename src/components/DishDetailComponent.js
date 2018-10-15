import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let comments = null
        
        if (this.props.dish != null) {
            comments = this.props.dish.comments.map((comment) => {
                return (
                    <div>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );                  
            });
        }

        if (this.props.dish != null) {
            return(
                
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card key={this.props.dish.key}>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h2>Comments</h2>
                        {comments}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
        
    }
}

export default DishDetail;