import React from 'react';
import { Header } from './Header';
import { Row, Col, Card, CardText} from 'reactstrap';
import Bio from './Bio';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../shared/projects';
import SectionBreak from './SectionBreak';


export const InfoPage = () => {
    const codingProjects = PROJECTS.filter(item => item.code);
    const maxProjects = PROJECTS.filter(item => item.patch);

    return (
        <React.Fragment>
                <Header />
                <Bio />
                <SectionBreak text='Recent Projects' />
                <Row className='justify-content-center px-3'>
                    {codingProjects.map(item => <ProjectCard items={item}/>).reverse()}
                </Row>
                <SectionBreak text='Max/MSP' />
                <Row className='justify-content-center px-3'>
                    {maxProjects.map(item => <ProjectCard items={item}/>)}
                </Row>
                <Contact />

        </React.Fragment>
    );
}

const Contact = (props) => {
    return (
        <Row className='justify-content-center m-5'>
            <Col className='col-sm-2 text-center'>
                <Card className='header-icon justify-items-center'>
                    <a role="button" href="mailto:mcdevittbass@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                        <i className="fa fa-envelope fa-5x fa-inverse"></i>
                    </a>
                    <CardText className='text-center nowrap'>Email Me</CardText>
                </Card>
            </Col>
            <Col className='col-sm-2 text-center'>
                <Card className='header-icon justify-items-center'>
                    <a role="button" href="https://www.linkedin.com/in/megmcd/" target="_blank" rel="noopener noreferrer" title="Email">
                        <i className="fa fa-linkedin fa-5x fa-inverse"></i>
                    </a>
                    <CardText className='text-center nowrap'>LinkedIn</CardText>
                </Card>
            </Col>
        </Row>
    );
}