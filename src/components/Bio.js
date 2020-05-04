import React from 'react';
import { Row, Col, Card} from 'reactstrap';

const Bio = (props) => {
    return (
        <React.Fragment>
            <Row className='bio-background py-3 px-0'>
                <Col className='col-9 col-md-8 mx-auto p-0'>
                    <Card className='bio mx-auto p-4 h-100'>
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
                        I am most interested in creating efficient, beautiful, and well-designed
                        user interfaces, whether web or mobile, but I am also eager to learn and work
                        on the backend to create thoughtful and efficient systems.

                    </p>
                    </Card>
                </Col>
                {/*card experiment I'm hesitant to delete
                <Col className='col-3 col-md-4'>
                    <Card className='projectCard text-center h-100 p-2'>
                        <a href="https://github.com/mcdevittbass?tab=repositories" target="_blank" rel="noopener noreferrer" title="GitHub Page">
                            <i className="fa fa-github fa-5x fa-inverse"></i>
                        </a>
                        <CardText>Github</CardText>
                        <br />
                        <a role="button" href="/img/software-resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                            <i className="fa fa-file-pdf-o fa-5x fa-inverse"></i>
                        </a>
                        <CardText>Resume</CardText>
                        <br />
                        <a role="button" href="mailto:mcdevittbass@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                            <i className="fa fa-envelope fa-5x fa-inverse"></i>
                        </a>
                        <CardText>Email</CardText>
                    </Card>
    </Col>*/}
            </Row>
        </React.Fragment>
    );
}

export default Bio;