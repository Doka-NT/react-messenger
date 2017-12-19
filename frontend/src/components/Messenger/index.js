import NavBar from "../NavBar";
import React from 'react';
import UserList from "../UserList";
import MessageList from '../MessageList';
import MessageBox from "../MessageBox";
import PropTypes from 'prop-types';

export default class Messenger extends React.Component {
    render() {
        const userList = this.props.userList;
        const messages = this.props.messageList;
        const onSend = this.props.onSend;

        return (
            <div className="react-messenger">
                <NavBar/>
                <aside style={{width: 200, marginTop: 0, float: 'left'}}>
                    <UserList list={userList}/>
                </aside>
                <article style={{marginTop: 80, marginLeft: 200}}>
                    <MessageList list={messages}/>
                    <MessageBox onSend={(e) => onSend(e)}/>
                </article>
            </div>
        )
    }
};

Messenger.propTypes = {
    onSend: PropTypes.func,
    userList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })),
    messageList: PropTypes.arrayOf(PropTypes.shape({
        getName: PropTypes.func,
        getAuthor: PropTypes.func,
    })),
};
