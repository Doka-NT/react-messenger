import React from 'react';
import ReactDOM from 'react-dom';
import Application from "./components/Application";

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);

if (module.hot) {
    // module.hot.accept('./routes', () => {
        //require('./routes');
        // render(AppRouter);
    // });
}
