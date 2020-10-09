//import random number
import { randomNumber } from './random.js';
//import react
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';
//import styles
import styled from 'styled-components';
//import button
import { Button } from '@material-ui/core';
//import say hi
import { sayHey } from './__tests__/random.js';

const Title = styled.h1`
	font-size: 2rem;
`;

// console.log(randomNumber());

document.getElementById('app').textContent = randomNumber();

sayHey();

ReactDOM.render(
	<>
		<Title>Hey there</Title> <Button>hey</Button>
	</>,
	document.getElementById('app'),
);
