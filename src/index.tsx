import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/containers/App';

const container = document.getElementById('app');

const render = () => {
    ReactDOM.render(<App />, container);
};

render();
