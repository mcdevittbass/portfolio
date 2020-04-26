import React, { Component } from 'react';
import {Card, CardBody, Row, Col, Container, CardText, CardHeader, Jumbotron} from 'reactstrap';


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
                            <Jumbotron style={{backgroundColor: bgColor}} className="intro-card mx-auto" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                <div style={{display: noDisplay}}>
                                    <h1 className="display-4 text-center">Megan McDevitt</h1>
                                    <h3 className="lead text-center">The best <span style={{fontWeight: 'bold', color: '#83C5BE'}}>Full Stack Developer</span> on the planet...</h3>
                                </div>
                                <h1 style={{display: display}} className="text-center">Depending on the planet...</h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default Intro;

/*<Row></Row>
                    <Row className="h-100">
                        <Col className="my-auto">
                            <Card className="mx-auto intro-card card card-block w-50 p-4">
                            <CardHeader className="align-items-center">Megan McDevitt</CardHeader>
                            <CardBody>
                                <CardText>The best Full Stack Developer on the planet...</CardText>
                            </CardBody>
                            </Card>
                        </Col>
                    </Row>*/
