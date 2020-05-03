import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


export const Header = () => {
    return(
        <Container className='mb-5'>
            <Row className="m-3">
                <Col className="col-sm-3">
                    <a href="https://github.com/mcdevittbass?tab=repositories" target="_blank" rel="noopener noreferrer" title="GitHub Page">
                        <i className="fa fa-github fa-5x fa-inverse"></i>
                    </a>
                </Col>
                <Col className="col-sm-6">
                    <h1 className="text-center header-card mx-auto">Megan McDevitt</h1>
                </Col>
                <Col className="col-sm-3 text-right">
                    <a role="button" href="/img/software-resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume!">
                        <i className="fa fa-file-pdf-o fa-5x fa-inverse"></i>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}