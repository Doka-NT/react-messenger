import NavBar from "./NavBar";
import React from 'react';
import UserList from "./UserList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        };
    }

    render() {
        return (
            <div className="navbar">
                <NavBar/>
                <aside style={{width: 200, marginTop: 60}}>
                    <UserList/>
                </aside>
            </div>
        )
    }
};
