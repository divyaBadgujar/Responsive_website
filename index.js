import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ToDoLists from './ToDoLists';
import './index.css';
import Accordian from './Accordian';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,document.getElementById("root")
);