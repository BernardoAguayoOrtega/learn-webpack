//import random number
import { randomNumber } from './random.js';
//import react
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';
//import styles
import 'index.css';

// console.log(randomNumber());

document.getElementById('app').textContent = randomNumber();

ReactDOM.render(<h1>Hey there</h1>, document.getElementById('app'));
