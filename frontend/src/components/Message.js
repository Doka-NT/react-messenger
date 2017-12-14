import React from 'react';
import Paper from "material-ui/es/Paper/Paper";
import Typography from "material-ui/es/Typography/Typography";

export default class Message extends React.Component {
    render() {
        const message = this.props.message;

        const author = message.author;
        const text = message.message;

        return (
            <Paper className="app" elevation={4}>
                <Typography type="headline" component="h3">
                    {author}
                </Typography>
                <Typography component="p">
                    {text}
                </Typography>
            </Paper>
        )
    }
}
