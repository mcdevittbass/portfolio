import React from 'react';
import { Row, Col } from 'reactstrap';

const SectionBreak = (props) => {
    let text = props.text;
    return (
        <Row className='section mt-5'>
            <Col className='text-center'>
                <h1>{text}</h1>
            </Col>
        </Row>
    );
}

export default SectionBreak;