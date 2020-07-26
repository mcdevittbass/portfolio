import React from 'react';
import { Card, CardBody, CardImg, Col, CardTitle, CardText} from 'reactstrap';

//takes data from projects.js as props to populate the card
const ProjectCard = (props) => {
    //if it's a website show "site", if it's a max patch show "Performance"
    let buttonShow = props.items.site ? 'Site' : props.items.performance ? 'Performance' : '';
    //if it's a website show "code", if it's a Max patch show "patch photo"
    let buttonCode = props.items.code ? 'Code' : props.items.patch ? 'Patch Photo' : '';
    //if there is no site to show, only show the "code" button or "performance" button
    const siteBtnConst = <a className='btn btn-secondary mx-2'
                            roll='button' 
                            href={props.items.site || props.items.performance}
                            target='_blank'
                            rel='noopener noreferrer'>
                                {buttonShow}</a>
    const siteButton = props.items.site || props.items.performance ? siteBtnConst : <div />;

    return (
        <Col className='col-12 col-md-4 my-2'>    
            <Card sm='6' id={props.items.id} className='projectCard m-2 h-100'>    
                <CardImg src={props.items.thumbnail} alt={props.items.alt} />
                <CardBody>
                    <CardTitle>{props.items.title}</CardTitle>
                    <CardTitle>{props.items.subtitle}</CardTitle>
                    <CardText>{props.items.text}</CardText>
                    <a className='btn btn-secondary mx-2'
                        roll='button' 
                        href={props.items.code || props.items.patch}
                        target='_blank'
                        rel='noopener noreferrer'>
                            {buttonCode}</a>
                    {siteButton}
                </CardBody>
            </Card>
        </Col>
    );
 }
 
 export default ProjectCard;