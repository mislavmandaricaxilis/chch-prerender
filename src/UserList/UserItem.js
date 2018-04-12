import React from 'react';
import { Card } from 'semantic-ui-react';

const UserItem = ({ name, gender, birth_year, mass, height }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{gender}</Card.Meta>
                <Card.Description>
                    <ul>
                        <li>Birth Year: {birth_year}</li>
                        <li>Mass: {mass}</li>
                        <li>Height: {height}</li>
                    </ul>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default UserItem;