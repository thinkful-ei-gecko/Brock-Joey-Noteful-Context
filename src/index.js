import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import dummyStore from './dummyStore'
import App from './components/App';


ReactDOM.render(
    <BrowserRouter>
        <App store={dummyStore} />
    </BrowserRouter>,
    document.getElementById('root')
);


