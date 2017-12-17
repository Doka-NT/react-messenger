import React from 'react';
import TextField from "material-ui/TextField/TextField";
import PropTypes from 'prop-types';

export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    onKeyPress(e) {
        const callback = this.props.onSend;
        const textInput = e.target;
        const message = textInput.value;

        if (e.key === 'Enter') {
            callback(message);
            textInput.value = null;
        }
    }

    render() {
        return (
            <div
                className="message-box"
                style={{
                    background: "#eeeeee",
                    padding: 10,
                }}
            >
                <TextField
                    name="message"
                    label="Message"
                    style={{width: '100%'}}
                    placeholder="Type message here..."
                    onKeyPress={this.onKeyPress.bind(this)}
                />
            </div>
        )
    }
}

MessageBox.propTypes = {
    onSend: PropTypes.func,
};
