import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { getRelativeLeftAndTop } from '../../helpers';

import './index.less';

const State = (props) => {
	const {
		id, top, left, symbol, final, initial, startDrawing, currentAction, createTransition,
		stateObject: { modifyState, deleteState, editTransitions }
	 } = props;

	const [className, setClassName] = useState('');
	const [isMoving, setIsMoving] = useState(false);

	useEffect(() => {
		if (className !== 'active')
			setClassName('active');
	});
	const stateFunctions = {
		onClick (clickEvent) {
			clickEvent.stopPropagation();
		},
		onMouseMove (mouseMoveEvent) {
			if (isMoving) {
				const [relLeft, relTop, relCLeft, relCTop] =
				 getRelativeLeftAndTop(mouseMoveEvent, 40, 'getRoot');
				modifyState(id, {
					left: relLeft, top: relTop,
					center: {
						x: relCLeft, y: relCTop
					}
				});
			}
		},
		onMouseDown () {
			setIsMoving(true);
		},
		onMouseUp () {
			if (currentAction === 'drawing_transition')
				createTransition(id);
			 else
				setIsMoving(false);

		},
		onMouseLeave () {
			setIsMoving(false);
			setClassName('active');
		},
		onMouseEnter () {
			if (currentAction === 'drawing_transition') {
				console.log('Hi there !', symbol);
				setClassName(['active', 'next-pick']);
			}
		}
	};
	const transitionAdderFunctions = {
		onMouseDown (mouseDownEvent) {
			startDrawing(id);
			mouseDownEvent.stopPropagation();
		}
	};
	return (
		<div
			className={classNames(className, 'state-wrapper', isMoving && 'priority')}
			style={{
				top: `${top * 100}%`, left: `${left * 100}%`
			}}
		>
			<div
				className={classNames('state', final && 'final', initial && 'initial')}
				{...stateFunctions}
			>
				<span
					className='add-transition'
					{...transitionAdderFunctions}
				>+</span>
				<span className='del-state' onClick={() => deleteState(id)}>⨯</span>
				<span
					className='set-final-state'
					onClick={() => modifyState(id, {
						final: !final
					})}
				>○</span>
				<span
					className='set-initial-state'
					onClick={() => modifyState(id, {
						initial: !initial
					})}
				>↘</span>
				<span
					className='set-transitions'
					onClick={() => editTransitions(id)}
				>☰</span>
				<span className='symbol'>{symbol}</span>
				<span className='move-icon'>⤨</span>
			</div>
		</div>
	);
};

export default State;
