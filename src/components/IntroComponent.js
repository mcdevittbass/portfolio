import React, { useState } from 'react';
import {Row, Col, Container, Jumbotron, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Intro = (props) => {
    const [bgColor, setBgColor] = useState(null);
    const [intro, setIntro] = useState('block');
    const [joke, setJoke] = useState('none');

    const handleMouseEnter = (event) => {
        setBgColor('#011638');
        setIntro('none');
        setJoke('block');
    }

    const handleMouseLeave = (event) => {
        setBgColor(null);
        setIntro('block');
        setJoke('none');
    }
        
    return (
        <React.Fragment>
            <Container className="h-100 mt-10">
                <Row>
                    <Col className="col col-sm-6 offset-sm-3">
                        <Jumbotron style={{backgroundColor: bgColor}} 
                            className="intro-card mx-auto" 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}>
                            <div style={{display: intro}}>
                                <h1 className="text-center">Megan McDevitt</h1>
                                <h3 className="lead text-center">The best <span style={{fontWeight: 'bold', color: '#83C5BE'}}>Full Stack Developer</span> on the planet...</h3>
                            </div>
                            <div style={{display: joke}} className="text-center">
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
export default Intro;
