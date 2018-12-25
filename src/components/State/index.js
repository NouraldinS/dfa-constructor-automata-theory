import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { getRelativeLeftAndTop, getQuarter } from '../../helpers';

import './index.less';

const State = (props) => {
	const [className, setClassName] = useState('');
	const [quarter, setQuarter] = useState('top');

	useEffect(() => {
		if (className !== 'active')
			setClassName('active');
	});

	const { top, left, symbol } = props;
	const stateFunctions = {
		onClick (clickEvent) {
			clickEvent.stopPropagation();
		},
		onMouseMove (mouseMoveEvent) {
			const [left, top] = getRelativeLeftAndTop(mouseMoveEvent);
			setQuarter(getQuarter(left, top));
		},
		onMouseDown () {

		},
		onMouseUp () {

		},
		onMouseLeave () {

		}
	};
	const transitionAdderFunctions = {
		onMouseDown (mouseDownEvent) {
			const { startDrawing, id } = props;
			startDrawing(id);
		},
		onMouseMove (mouseMoveEvent) {
			mouseMoveEvent.preventDefault();
			mouseMoveEvent.stopPropagation();
		}
	};
	console.log('quarter', quarter);
	return (
		<div
			className={classNames(className, 'state-wrapper')}
			style={{ top: `${top * 100}%`, left: `${left * 100}%` }}
		>
			<div
				className='state'
				{...stateFunctions}
			>
				<span
					className='add-transition'
					style={{ [quarter]: '-20px' }}
					{...transitionAdderFunctions}
				>+</span>
				{symbol}
			</div>
		</div>
	);
};

export default State;
