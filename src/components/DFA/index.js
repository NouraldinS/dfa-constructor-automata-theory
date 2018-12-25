import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import State from '../State';
import { getRelativeLeftAndTop, getCharacterAtIndex } from '../../helpers';

import './index.less';

const DFA = (props) => {
	const [tempTransition, setTempTransition] = useState(null);
	const { states, currentAction } = props;

	useEffect(() => {
		const canvas = document.getElementById('dfa-constructor');
		const ctx = canvas.getContext('2d');

		ctx.canvas.width = window.innerWidth * 0.95;
		ctx.canvas.height = 900;

		const drawState = ({ left, top }) => {
			const x = ctx.canvas.width * left;
			const y = ctx.canvas.height * top;
			ctx.beginPath();
			ctx.arc(x, y, 20, 0, 2 * Math.PI);
			ctx.fillStyle = '#20A0FF';
			ctx.fill();
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#FFF';
			ctx.stroke();
			ctx.shadowColor = 'rgba(0, 0, 0, .16)';
			ctx.shadowBlur = 3;
			ctx.shadowOffsetX = 2;
		};

		tempStates.forEach((state) => drawState(state.position));

		ctx.fillStyle = 'rgb(200, 0, 0)';
		ctx.fillRect(10, 10, 50, 50);

		ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		ctx.fillRect(30, 30, 50, 50);
	});

	const dfaFunctions = {
		onClick (clickEvent) {
			const [relLeft, relTop] = getRelativeLeftAndTop(clickEvent);
			console.log('relLeft, relTop', relLeft, relTop);
		}
	};

	return (
		<div className='wrapper'>
			<canvas
				width={1320}
				height={900}
				id='dfa-constructor'
				className={'space'}
				{...dfaFunctions}
			>
				Please enable Javascript in your browser
			</canvas>
		</div>
	);
};

DFA.propTypes = {
	// states: PropTypes.arrayOf({ left: PropTypes.number, top: PropTypes.number }).isRequired
};

export default DFA;

// TEMP
const tempStates = [
	{ symbol: 'A', position: { left: 0.18, top: 0.19 } },
	{ symbol: 'B', position: { left: 0.28, top: 0.29 } },
	{ symbol: 'V', position: { left: 0.38, top: 0.39 } },
	{ symbol: 'C', position: { left: 0.48, top: 0.49 } },
	{ symbol: 'D', position: { left: 0.58, top: 0.59 } },
	{ symbol: 'K', position: { left: 0.68, top: 0.69 } },
	{ symbol: 'S', position: { left: 0.78, top: 0.79 } }
];
