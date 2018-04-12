import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import Home from './Home';
import About from './About';
import UserList from './UserList';

const Root = () => (
    <React.Fragment>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as={Link} to="/">Home</Menu.Item>
                <Menu.Item as={Link} to="/about">About</Menu.Item>
                <Menu.Item as={Link} to="/users">Users</Menu.Item>
            </Container>
        </Menu>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={UserList} />
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
);

export default Root;