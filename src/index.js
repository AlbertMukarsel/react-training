import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/containers/App';

const container = document.getElementById('app');
const render = () => {
    ReactDOM.render(<App />, container);
};

render();

