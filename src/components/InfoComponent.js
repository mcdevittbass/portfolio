import React from 'react';
import { Header } from './Header';
import { Container, Row} from 'reactstrap';
import Bio from './Bio';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../shared/projects';


export const InfoPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Container className='mt-4'>
                <Bio />
                <Row className='justify-items-center'>
                    <ProjectCard items={PROJECTS[0]} />
                    <ProjectCard items={PROJECTS[1]} />
                    <ProjectCard items={PROJECTS[2]} />
                </Row>
            </Container>
        </React.Fragment>
    );
}