import React from 'react';
import ListItem from "material-ui/es/List/ListItem";
import List from "material-ui/es/List/List";
import ListItemText from "material-ui/es/List/ListItemText";

export default class UserList extends React.Component {

    render() {
        const users = ["Ivanov I.I", "Petrov A.S", "Smirnov V.A.", "Root S.V"];

        return (
            <List>
                {users.map(value => (
                    <ListItem key={value} dense button>
                        <i className="material-icons" style={{color: 'black'}}>person</i>
                        <ListItemText primary={value} />
                    </ListItem>
                ))}
            </List>
        )
    }
};
