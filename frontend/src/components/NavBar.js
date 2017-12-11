import React from 'react';
import AppBar from "material-ui/es/AppBar/AppBar";
import Toolbar from "material-ui/es/Toolbar/Toolbar";
import Typography from "material-ui/es/Typography/Typography";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar title="React Messenger" color='accent'>
                <Toolbar>
                    <i className="material-icons" style={{color: 'white'}}>chat</i>
                    &nbsp;
                    <Typography type="title" color="inherit" className="foo">
                        React Messenger
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
};
