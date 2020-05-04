import React, { Component } from 'react';
import { Card, CardBody, CardImg, Col, CardTitle, CardText} from 'reactstrap';

//takes data from projects.js as props to populate the card
class ProjectCard extends Component {
    render() {
        //if there is no site to show, only show the "code" button
        const siteBtnConst = <a className='btn btn-secondary mx-2'
                                roll='button' 
                                href={this.props.items.site}
                                target='_blank'
                                rel='noopener noreferrer'>
                                    Site</a>
        const siteButton = this.props.items.site ? siteBtnConst : <div />;    
        return (
            <Col className='col-12 col-md-4 my-2'>    
                <Card sm='6' id={this.props.items.id} className='projectCard m-2 h-100'>    
                    <CardImg src={this.props.items.thumbnail} alt={this.props.items.alt} />
                    <CardBody>
                        <CardTitle>{this.props.items.title}</CardTitle>
                        <CardTitle>{this.props.items.subtitle}</CardTitle>
                        <CardText>{this.props.items.text}</CardText>
                        <a className='btn btn-secondary mx-2'
                            roll='button' 
                            href={this.props.items.code}
                            target='_blank'
                            rel='noopener noreferrer'>
                                Code</a>
                        {siteButton}
                    </CardBody>
                </Card>
            </Col>
        );
    }
 }
 
 export default ProjectCard;