import React from 'react';
import Typography from "material-ui/es/Typography/Typography";
import PropTypes from "prop-types";
import MessageObject from '../objects/Message';

export default class Message extends React.Component {
    render() {
        const message = this.props.message;

        const author = message.author;
        const text = message.text;

        return (
            <div className="message" style={{marginBottom: 15}}>
                <Typography type="headline" component="h4">
                    {author}
                </Typography>
                <Typography component="p">
                    {text}
                </Typography>
            </div>
        )
    }
}

Message.propTypes = {
    message: PropTypes.instanceOf(MessageObject),
};
