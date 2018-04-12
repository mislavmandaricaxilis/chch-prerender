import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const About = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>About</Header>
        <p>{new Date().toUTCString()}.</p>
    </Container>
);

export default About;