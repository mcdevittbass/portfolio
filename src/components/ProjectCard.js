import React, { Component } from 'react';
import { Card, CardBody, CardImg, Col, CardTitle, CardText} from 'reactstrap';

//takes data from projects.js as props to populate the card
class ProjectCard extends Component {
    render() {
        //if it's a website show "site", if it's a max patch show "Performance"
        let buttonShow = this.props.items.site ? 'Site' : this.props.items.performance ? 'Performance' : '';
        //if it's a website show "code", if it's a Max patch show "patch photo"
        let buttonCode = this.props.items.code ? 'Code' : this.props.items.patch ? 'Patch Photo' : '';
        //if there is no site to show, only show the "code" button or "performance" button
        const siteBtnConst = <a className='btn btn-secondary mx-2'
                                roll='button' 
                                href={this.props.items.site || this.props.items.performance}
                                target='_blank'
                                rel='noopener noreferrer'>
                                    {buttonShow}</a>
        const siteButton = this.props.items.site || this.props.items.performance ? siteBtnConst : <div />;

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
                            href={this.props.items.code || this.props.items.patch}
                            target='_blank'
                            rel='noopener noreferrer'>
                                {buttonCode}</a>
                        {siteButton}
                    </CardBody>
                </Card>
            </Col>
        );
    }
 }
 
 export default ProjectCard;