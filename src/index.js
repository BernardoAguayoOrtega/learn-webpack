//import random number
import { randomNumber } from './random.js';
//import react
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';

// console.log(randomNumber());

document.getElementById('app').textContent = randomNumber();

ReactDOM.render('hey there', document.getElementById('app'));
