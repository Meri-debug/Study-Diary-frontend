import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lista from '../REST';

export default class Topics extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>
                        <Lista />
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }
}
