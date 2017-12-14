import NavBar from "./NavBar";
import React from 'react';
import UserList from "./UserList";
import MessageList from './MessageList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        };
    }

    static getMessageList() {
        return [
            {author: "Ivanov I.I", message: "Lorem Ipsum webpack)-hot-middleware"},
            {author: "Petrov V.A", message: "webpack)-hot-middleware Lorem ipsum foe aqqs qweqssw qdqw "},
            {author: "Ivanov I.I", message: "Lorem Ipsum webpack)-hot-middleware"},
            {author: "Petrov V.A", message: "webpack)-hot-middleware Lorem ipsum foe aqqs qweqssw qdqw "},
        ];
    }

    render() {
        return (
            <div className="navbar">
                <NavBar/>
                <aside style={{width: 200, marginTop: 0, float: 'left'}}>
                    <UserList/>
                </aside>
                <article style={{marginTop: 80, marginLeft: 200}}>
                    <MessageList list={App.getMessageList()}/>
                </article>
            </div>
        )
    }
};
