import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM  from 'react-dom';
import App from "./components/App";

//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerId = setInterval(() => this.tick(), 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

if (module.hot) {
    // module.hot.accept('./routes', () => {
        //require('./routes');
        // render(AppRouter);
    // });
}
