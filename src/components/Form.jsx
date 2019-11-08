import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Form extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dignissim nibh. Aliquam malesuada sollicitudin lacus, quis congue urna ultricies elementum. Praesent pretium tincidunt nisl in imperdiet. Duis id lorem dolor. Mauris aliquet ac ex id convallis. Integer porttitor, mi fermentum porta accumsan, metus leo sodales enim, et dignissim quam tellus non justo. In pulvinar gravida urna, at tempor lorem maximus quis. Nullam varius molestie leo, ut aliquet lectus vehicula ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus posuere quis ligula sit amet pretium. Nam ut eleifend turpis. Nulla placerat id justo quis tristique. Ut ut massa lacinia ex viverra suscipit. Nullam quis posuere massa, quis porta tellus. In quis sem sem. Suspendisse potenti.</Col>
                    <Col xs={6}>
                        <div class="mt-5 col">
                            <h2 id="fat">My Diary</h2>
                            <form action="http://localhost3000" id="topic">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Aiheen tunniste</label>
                                    <input type="text" class="form-control" id="UUID"/>
                                </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Aiheen otsikko</label>
                                        <input type="text" class="form-control" id="Title"/>
                                    </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Aiheen kuvaus</label>
                                            <textarea class="form-control" id="Description" rows="3"></textarea>
                                        </div>
                            </form>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Aika-arvio</label>
                                        <input type="number" class="form-control" id="TimeToMaster"/>
                                    </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Käytetty aika</label>
                                            <input type="number" class="form-control" id="TimeSpent"/>
                                        </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Lähteet</label>
                                                <input type="text" class="form-control" id="Source"/>
                                            </div>
                                                <div class="form-group">
                                                    <label>Aloitusaika</label>
                                                    <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control"
                                                        id="StartLearningDate"/>
                                                </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Status</label>
                                                        <input type="text" class="form-control" id="InProgress"/>
                                                    </div>
                                                        <div class="form-group">
                                                            <label>Milloin aihe on opiskeltu</label>
                                                            <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control"
                                                                id="CompletionDate"/>
                                                        </div>
                                                            <button type="button" class="btn btn-primary" onclick="Luo()">Lähetä</button>
                                                        </div>
                        </Col>
                    <Col>3 of 3</Col>
                    </Row>
                </Container>
                                            )
                                        }
                                    }
