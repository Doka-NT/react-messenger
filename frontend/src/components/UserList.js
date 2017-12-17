import React from 'react';
import ListItem from "material-ui/es/List/ListItem";
import List from "material-ui/es/List/List";
import ListItemText from "material-ui/es/List/ListItemText";
import PropTypes from 'prop-types';

export default class UserList extends React.Component {
    render() {
        const users = this.props.list;

        return (
            <List>
                {users.map((user, index) => (
                    <ListItem key={index} dense button>
                        <i className="material-icons" style={{color: 'black'}}>person</i>
                        <ListItemText primary={user.name}/>
                    </ListItem>
                ))}
            </List>
        )
    }
};

UserList.propTypes = {
    list: PropTypes.array,
};
