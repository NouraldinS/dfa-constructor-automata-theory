import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import State from '../State';
import { getRelativeLeftAndTop, getCharacterAtIndex } from '../../helpers';

import './index.less';

const DFA = (props) => {
	const [tempTransition, setTempTransition] = useState(null);

	const { states, currentAction } = props;
	const spaceFunctions = {
		onClick (clickEvent) {
			if (currentAction === 'drawing_transition') return;
			const { createState } = props;
			const numberOfStates = states.length;
			const [left, top, cx, cy] = getRelativeLeftAndTop(clickEvent, 35);
			const newStateObject = {
				left,
				top,
				center: { x: cx, y: cy },
				id: uuid(),
				symbol: getCharacterAtIndex('A', numberOfStates)
			};
			createState(newStateObject);
		},
		onMouseMove (mouseMoveEvent) {
			if (currentAction === 'drawing_transition') {
				console.log('tempTransition', tempTransition);
				const [left, top,,, width] = getRelativeLeftAndTop(mouseMoveEvent);
				setTempTransition({ ...tempTransition, end: { x: left, y: top }, width });
			}
		}
	};
	const startDrawing = (sourceId) => {
		const { startDrawing } = props;
		const sourceNode = states.filter(({ id }) => id === sourceId)[0];
		setTempTransition({ start: { ...sourceNode.center } });
		startDrawing();
	};
	console.log('tempTransition', tempTransition);
	return (
		<canvas className={'space'} {...spaceFunctions}>
			{
				states.map((state) => (
					<State
						{...state}
						key={state.id}
						startDrawing={startDrawing}
					/>
				))
			}
			{console.log('Math', Math)}
			{
				tempTransition && tempTransition.end &&
        <span
        	className='arrow'
        	style={{
        		height: 10,
        		width: 1,
        		backgroundColor: 'black',
        		position: 'absolute',
        		top: `${tempTransition.start.y * 100}%`,
        		left: `${tempTransition.start.x * 100}%`,
        		transformOrigin: 'bottomLeft',
    		    transform: `scaleX(${tempTransition.width * (tempTransition.start.x - tempTransition.end.x)}) rotate(${Math.atan(tempTransition.end.y / tempTransition.end.x)}deg)`
        	}}
        />
			}
		</canvas>
	);
};

DFA.propTypes = {
	// states: PropTypes.arrayOf({ left: PropTypes.number, top: PropTypes.number }).isRequired
};

export default DFA;
