import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ReactPlaceholder from 'react-placeholder';

import UserItem from './UserItem';
import { store } from '../store';

class UserList extends React.Component {
    state = window.__PRELOADED_STATE__ || {
        users: [],
        loading: false
    }

    async componentDidMount() {
        if (this.state.users.length <= 0) {
            this.setState({
                loading: true
            });
            const response = await fetch('https://swapi.co/api/people/').then(x => x.json());
            this.setState({
                users: response.results,
                loading: false
            });
            store.users = response.results;
        }
    }

    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Users</Header>
                <ReactPlaceholder showLoadingAnimation type="media" rows={4} ready={!this.state.loading}>
                    {this.state.users.map(user => <UserItem key={user.name} {...user} />)}
                </ReactPlaceholder>
            </Container>
        );
    }
}

export default UserList;