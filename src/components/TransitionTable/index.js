import React, { useState } from 'react';

import { checkDFA, testInput } from '../../helpers';

import './index.less';

const TransitionTable = (props) => {
	const { states, transitions, readableLanguage } = props;

	const [solution, setSolution] = useState(null);
	const [testValue, changeTestValue] = useState('');

	const sortedTransitions = transitions.sort((ta, tb) => ta.dir > tb.dir ? 1 : -1);
	const initialStates = states.filter((state) => state.initial);
	const finalStates = states.filter((state) => state.final);

	const onTestValueChange = (keyPressEvent) => {
		const { target: { value: newValue } } = keyPressEvent;
		changeTestValue(newValue);
	};

	const runTest = () => {
		const solution = testInput(states, transitions, readableLanguage, testValue);
		console.log('solution', solution);
		setSolution(solution);
	};
	return (
		<div className='table-wrapper'>
			<table>
				<tbody>
					<tr>
						<th>State</th>
						<th>Input symbol</th>
						<th>Next state</th>
					</tr>
					{
						sortedTransitions.map((transition) => (
							<tr key={transition.id}>
								<td>{transition.startNode.symbol}</td>
								<td>{transition.text}</td>
								<td>{transition.endNode.symbol}</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<div className='start-to-finish'>
				<div>Initial state{initialStates.length > 1 && 's'}:{' '}
					{
						initialStates.length === 0
							? 'None'
							: initialStates.map((state) => state.symbol).join(', ')
					}
				</div>
				<div>Final state{finalStates.length > 1 && 's'}:{' '}
					{
						finalStates.length === 0
							? 'None'
							: finalStates.map((state) => state.symbol).join(', ')
					}
				</div>
				<div>
					Test input:
					{' '}
					<input value={testValue} onChange={onTestValueChange} />
					{' '}
					<button onClick={runTest}>Test</button>
				</div>
				{checkDFA(transitions) && <div>The automata is deterministic</div>}
			</div>
			{
				solution &&
				<div>
					Solution: {solution.traversalPath}
				</div>
			}
		</div>
	);
};

export default TransitionTable;
