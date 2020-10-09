//import random number
import { randomNumber } from './random.js';
//import react
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';
//import styles
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 100rem;
`;

// console.log(randomNumber());

document.getElementById('app').textContent = randomNumber();

ReactDOM.render(<Title>Hey there</Title>, document.getElementById('app'));
