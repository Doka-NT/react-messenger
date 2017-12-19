import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import MessageObject from "../../objects/Message";

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    scrollToBottom() {
        this.wrapper.scrollTop = this.wrapper.scrollHeight;
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const list = this.props.list;
        return (
            <div
                className="message-list"
                style={{height: 300, overflowY: 'scroll'}}
                ref={(el) => { this.wrapper = el; }}
            >
                {list.map((message, index) => (
                    <Message key={index} message={message}/>
                ))}
            </div>
        )
    }
}

MessageList.propType = {
    list: PropTypes.arrayOf(MessageObject),
};
