import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ReactPlaceholder from 'react-placeholder';
import UserItem from './UserItem';

class UserList extends React.Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({
            loading: true
        });
        const response = await fetch('https://swapi.co/api/people/').then(x => x.json());
        this.setState({
            users: response.results,
            loading: false
        });
    }

    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Users</Header>
                <p>
                    <ReactPlaceholder showLoadingAnimation type="media" rows={4} ready={!this.state.loading}>
                        {this.state.users.map(user => <UserItem {...user} />)}
                    </ReactPlaceholder>
                </p>
            </Container>
        );
    }
}

export default UserList;