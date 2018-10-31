import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron }  from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess}) {
    if (item == null) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

const Home = (props) => {
    return (
        <div className="home">
        {/* <Jumbotron> */}
            <div className="home__welcome">
                <div className="home__welcome-msg">
                    <p>Di Carpaccio Ristorante</p>
                    <p>1524 E Brokers Ave.</p>
                </div>
            </div>
        {/* </Jumbotron> */}
            <div className="container content">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                </div>

                <div className="row content__presentation">
                    <div className="col-md-6">
                        <p>This is an essay</p>
                        <img src="../images/appetizer.jpg" alt="food" className="float-right" />
                    </div>

                    <div className="col-md-6">
                        <h3>Lorem Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    
                    </div>

                    <div className="col-md-6">
                    
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Home;