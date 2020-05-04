import React from 'react';
import { Row, Col, Card} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

//Bio in a reactstrap card for clean design/rounded edges
const Bio = (props) => {
    return (
        <React.Fragment>
            <Row className='bio-background py-3 px-0' style={{backgroundImage: `url(${baseUrl}/img/plant2.jpeg)`}}>
                <Col className='col-9 col-md-8 mx-auto p-0'>
                    <Card className='bio mx-auto p-4'>
                    <p>
                        Hi, I'm Megan. <br /> 
                        I have experience coding in React and React Native (with Redux) 
                        in addition to HTML, CSS (with SCSS and Bootstrap), Javascript, C, 
                        and using Git/GitHub for version control. <br /><br />
                        I spent the last decade of my life as a professional musician and 
                        music teacher. While studying for my doctorate in double bass performance,
                        I began experimenting with performing with electronics. I learned to generate
                        and manipulate my own sounds using a program called Max/MSP, 
                        which is based in C, and fell in love with coding. 
                        This began a move toward software development, culminating in enrollment in 
                        Nucamp Full-Stack Bootcamp and a decision to make a career change.  <br /><br />
                        I am most interested in using logic to solve problems and build great products. 
                        That could mean creating efficient, beautiful, and well-designed
                        user interfaces, whether web or mobile. But, I am also eager to learn and work
                        on the backend to create thoughtful and efficient systems.

                    </p>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Bio;