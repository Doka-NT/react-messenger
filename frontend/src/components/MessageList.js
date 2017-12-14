import React from 'react';
import Message from './Message';

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.list;
        return (
            <div className="message-list">
                {list.map(message => (
                    <Message message={message}/>
                ))}
            </div>
        )
    }
}
