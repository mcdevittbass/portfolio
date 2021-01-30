import React from 'react';
import {Row, Col, Card, CardText} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

//on mobile, the order changes so the two links move below the name
export const Header = () => {
    return(
            <Row className="m-3 header-card">
                <Col className='col-6 col-sm-2 text-center order-1 order-sm-0'>
                    <Card className='header-icon justify-items-center'>
                            <a href="https://github.com/mcdevittbass?tab=repositories" target="_blank" rel="noopener noreferrer" title="GitHub Page">
                                <i className="fa fa-github fa-5x fa-inverse text-center"></i>
                            </a>
                        <CardText className='text-center nowrap'>GitHub</CardText>
                    </Card>
                </Col>
                <Col className="col-sm-6 mx-auto">
                    <h1 className="text-center mx-auto">Megan McDevitt</h1>
                    <h4 className="text-center" >Full Stack Developer</h4>
                </Col>
                <Col className=' col-6 col-sm-2 text-center'>
                    <Card className='header-icon justify-items-center'>
                        <a role="button" href={baseUrl + '/img/McDevitt-Resume-Feb-2021.pdf'} target="_blank" rel="noopener noreferrer" title="Resume">
                            <i className="fa fa-file-pdf-o fa-5x fa-inverse"></i>
                        </a>
                        <CardText className='text-center nowrap'>Resume</CardText>
                    </Card>
                </Col>
            </Row>
    );
}