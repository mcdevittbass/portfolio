import React, { Component } from 'react';
import {Row, Col, Container, Jumbotron, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: null,
            shownText: 'block',
            hiddenText: 'none'
        }
    }

    handleMouseEnter = (event) => {
        this.setState({bgColor: '#011638'});
        this.setState({hiddenText: 'block'});
        this.setState({shownText: 'none'});
    }

    handleMouseLeave = (event) => {
        this.setState({bgColor: null});
        this.setState({hiddenText: 'none'});
        this.setState({shownText: 'block'});
    }

    render() {
        const bgColor = this.state.bgColor;
        const display = this.state.hiddenText;
        const noDisplay = this.state.shownText;
        return(
            <React.Fragment>
                <Container className="h-100 mt-10">
                    <Row>
                        <Col className="col col-sm-6 offset-sm-3">
                            <Jumbotron style={{backgroundColor: bgColor}} 
                                className="intro-card mx-auto" 
                                onMouseEnter={this.handleMouseEnter} 
                                onMouseLeave={this.handleMouseLeave}>
                                <div style={{display: noDisplay}}>
                                    <h1 className="text-center">Megan McDevitt</h1>
                                    <h3 className="lead text-center">The best <span style={{fontWeight: 'bold', color: '#83C5BE'}}>Full Stack Developer</span> on the planet...</h3>
                                </div>
                                <div style={{display: display}} className="text-center">
                                    <h1>Depending on the planet...</h1>
                                    <hr class="my-4" />
                                    <NavLink to="/info">
                                        <Button id="moreButton">More about Megan</Button>
                                    </NavLink>
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default Intro;
