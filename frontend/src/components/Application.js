import React from 'react';
import Messenger from "./Messenger";
import MessageObject from "../objects/Message";
import User from "../objects/User";

export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            messageList: [],
        };
    }

    componentDidMount() {
        this._updateUserList([
            new User("Ivanov I.I"),
            new User("Petrov A.S"),
            new User("Smirnov V.A."),
            new User("Root S.V"),
        ]);

        this._updateMessageList([
            new MessageObject("Ivanov I.I","Lorem Ipsum webpack)-hot-middleware"),
            new MessageObject("Petrov V.A","webpack)-hot-middleware Lorem ipsum foe aqqs qweqssw qdqw "),
            new MessageObject("Ivanov I.I","Lorem Ipsum webpack)-hot-middleware"),
            new MessageObject("Petrov V.A","webpack)-hot-middleware Lorem ipsum foe aqqs qweqssw qdqw "),
        ]);
    }

    _updateUserList(list) {
        this.setState({
            userList: list,
        });
    }

    _updateMessageList(list) {
        this.setState({
            messageList: list,
        });
    }

    _onSend(message) {
        const messageList = this.state.messageList;
        messageList.push(new MessageObject("me", message));

        this._updateMessageList(messageList);
    }

    render() {
        return (
            <Messenger
                onSend={this._onSend.bind(this)}
                userList={this.state.userList}
                messageList={this.state.messageList}
            />
        )
    }
}
