import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import Modal from 'react-responsive-modal';

import State from '../State';
import Transition from '../Transition';

import { getRelativeLeftAndTop, getCharacterAtIndex, decodeTransitionString } from '../../helpers';

import './index.less';

const DFA = (props) => {
	const [tempTransition, setTempTransition] = useState(null);
	const [allowCreatingStates, setAllowCreatingStates] = useState(true);
	const [activeState, setModalVisible] = useState(false);

	const { states, transitions, currentAction, stateObject } = props;
	stateObject.editTransitions = (stateId) => {
		setModalVisible(stateId);
	};
	const spaceFunctions = {
		onClick (clickEvent) {
			if (!allowCreatingStates) return setAllowCreatingStates(true);
			const { createState } = props;
			const [left, top, cx, cy] = getRelativeLeftAndTop(clickEvent, 35);
			const newStateObject = {
				left,
				top,
				center: {
					x: cx, y: cy
				},
				id: uuid(),
				symbol: getCharacterAtIndex('A', props.statesCeil)
			};
			createState(newStateObject);
		},
		onMouseMove (mouseMoveEvent) {
			if (currentAction === 'drawing_transition') {
				const [left, top,,, width] = getRelativeLeftAndTop(mouseMoveEvent, 0, 'getRoot');
				setTempTransition({
					...tempTransition, end: {
						x: left, y: top
					}, width
				});
			}
		},
		onMouseUp () {
			if (currentAction === 'drawing_transition') {
				const { cancelDrawing } = props;
				setTempTransition(null);
				cancelDrawing();
			}
		}
	};

	const startDrawing = (sourceId) => {
		const { startDrawing } = props;
		const sourceNode = states.filter(({ id }) => id === sourceId)[0];
		setTempTransition({
			startNode: sourceNode
		});
		setAllowCreatingStates(false);
		startDrawing();
	};

	const createTransition = (targetStateId) => {
		const { createTransition } = props;
		const targetState = states.filter(({ id }) => id === targetStateId)[0];
		createTransition({
			...tempTransition,
			endNode: targetState,
			acceptedSymbols: ['λ'],
			text: 'λ',
			id: uuid()
		});
		setTempTransition(null);
	};

	const handleEditTransition = (keyPressEvent, transition) => {
		if (keyPressEvent.key === 'Enter') {
			const { target: { value: inputText } } = keyPressEvent;
			const transitionString = decodeTransitionString(inputText);
			const { updateTransition } = props;
			if (transitionString) {
				updateTransition({
					...transition,
					text: inputText.replace('$', 'λ'),
					acceptedSymbols: transitionString
				});
			}
		}
	};

	return (
		<div className='space' {...spaceFunctions}>
			{transitions.map((trans) => <Transition states={states} key={trans.id} {...trans}/>)}
			{tempTransition && <Transition states={states} {...tempTransition} />}
			{
				states.map((state) => (
					<State
						{...state}
						key={state.id}
						stateObject={stateObject}
						startDrawing={startDrawing}
						currentAction={currentAction}
						createTransition={createTransition}
					/>
				))
			}
			<Modal
				open={Boolean(activeState)}
				closeIconSize={14}
				styles={{
					closeButton: {
						top: 0, right: 0
					}
				}}
				onClose={() => setModalVisible(false)}
			>
				<table className='transition-table'>
					<tbody>
						<tr>
							<th>Direction</th>
							<th>Input</th>
						</tr>
						{transitions.filter(({ startNode: { id: startId } }) => activeState === startId)
							.map((transition) => (
								<tr key={transition.id}>
									<td>{transition.dir.replace('>', '➡')}</td>
									<td>
										<input
											defaultValue={transition.text}
											placeholder='Try "a...z, 0...9, A, B" or $ for λ'
											onKeyPress={(ev) => handleEditTransition(ev, transition)}
										/>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</Modal>
		</div>
	);
};

DFA.propTypes = {
	// states: PropTypes.arrayOf({ left: PropTypes.number, top: PropTypes.number }).isRequired
};

export default DFA;
