import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DFA from './components/DFA';
import Tabs from './components/Tabs';
import TransitionTable from './components/TransitionTable';

import './index.less';

class App extends Component {
	state = {
	  states: [{ left: 0.08662280701754387, top: 0.45, center: { x: 0.10581140350877193, y: 0.4888888888888889 }, id: '1d04bb81-d206-4314-8282-8c08022306df', symbol: 'A₀', initial: true }, { left: 0.23684210526315788, top: 0.6633333333333333, center: { x: 0.25603070175438597, y: 0.7022222222222222 }, id: 'bc7629d8-4785-4605-a874-aa657077e14c', symbol: 'A₁' }, { left: 0.39473684210526316, top: 0.7177777777777777, center: { x: 0.4139254385964912, y: 0.7566666666666667 }, id: '7046ba4f-5126-4e0c-b3e1-f377705c5364', symbol: 'A₂' }, { left: 0.549890350877193, top: 0.6966666666666667, center: { x: 0.569078947368421, y: 0.7355555555555555 }, id: '3d258834-9a3b-4f30-aa1d-6b9ad9f37409', symbol: 'A₃' }, { left: 0.24342105263157895, top: 0.41555555555555557, center: { x: 0.26260964912280704, y: 0.45444444444444443 }, id: '12679d71-4ba3-4d6b-9b60-1e726da49d2b', symbol: 'A₄' }, { left: 0.40844298245614036, top: 0.4255555555555556, center: { x: 0.4276315789473684, y: 0.46444444444444444 }, id: '41459a6f-67bd-42b4-ab86-430ec2ae96eb', symbol: 'A₅' }, { left: 0.5783991228070176, top: 0.4222222222222222, center: { x: 0.5975877192982456, y: 0.46111111111111114 }, id: '17e4a4cd-20f7-4bc9-a577-90f341e32601', symbol: 'A₆' }, { left: 0.35855263157894735, top: 0.2822222222222222, center: { x: 0.37774122807017546, y: 0.3211111111111111 }, id: 'e35c4cee-0dba-4b19-93ed-cd495925d759', symbol: 'A₇' }, { left: 0.24671052631578946, top: 0.2311111111111111, center: { x: 0.26589912280701755, y: 0.27 }, id: 'df330c54-6494-4269-8703-7802a1f6dd9e', symbol: 'A₈' }],
		statesCeil: 0,
		tempNode: null,
	  transitions: [{ startNode: { left: 0.08662280701754387, top: 0.45, center: { x: 0.10581140350877193, y: 0.4888888888888889 }, id: '1d04bb81-d206-4314-8282-8c08022306df', symbol: 'A₀', initial: true }, end: { x: 0.27247807017543857, y: 0.2788888888888889 }, width: 1824, endNode: { left: 0.24671052631578946, top: 0.2311111111111111, center: { x: 0.26589912280701755, y: 0.27 }, id: 'df330c54-6494-4269-8703-7802a1f6dd9e', symbol: 'A₈' }, acceptedSymbols: ['b'], text: 'b', id: '6e8b79bc-6ee1-488e-b2ad-4a4e3da2389a', dir: 'A₀ > A₈' }, { startNode: { left: 0.08662280701754387, top: 0.45, center: { x: 0.10581140350877193, y: 0.4888888888888889 }, id: '1d04bb81-d206-4314-8282-8c08022306df', symbol: 'A₀', initial: true }, end: { x: 0.2582236842105263, y: 0.45444444444444443 }, width: 1824, endNode: { left: 0.24342105263157895, top: 0.41555555555555557, center: { x: 0.26260964912280704, y: 0.45444444444444443 }, id: '12679d71-4ba3-4d6b-9b60-1e726da49d2b', symbol: 'A₄' }, acceptedSymbols: ['a'], text: 'a', id: '759a165f-107a-4956-93d3-e4599bc2e8c7', dir: 'A₀ > A₄' }, { startNode: { left: 0.08662280701754387, top: 0.45, center: { x: 0.10581140350877193, y: 0.4888888888888889 }, id: '1d04bb81-d206-4314-8282-8c08022306df', symbol: 'A₀', initial: true }, end: { x: 0.25219298245614036, y: 0.6855555555555556 }, width: 1824, endNode: { left: 0.23684210526315788, top: 0.6633333333333333, center: { x: 0.25603070175438597, y: 0.7022222222222222 }, id: 'bc7629d8-4785-4605-a874-aa657077e14c', symbol: 'A₁' }, acceptedSymbols: ['a'], text: 'a', id: 'ece6e64d-6988-4481-bd81-b5347ca0bb72', dir: 'A₀ > A₁' }, { startNode: { left: 0.23684210526315788, top: 0.6633333333333333, center: { x: 0.25603070175438597, y: 0.7022222222222222 }, id: 'bc7629d8-4785-4605-a874-aa657077e14c', symbol: 'A₁' }, end: { x: 0.41776315789473684, y: 0.7455555555555555 }, width: 1824, endNode: { left: 0.39473684210526316, top: 0.7177777777777777, center: { x: 0.4139254385964912, y: 0.7566666666666667 }, id: '7046ba4f-5126-4e0c-b3e1-f377705c5364', symbol: 'A₂' }, acceptedSymbols: ['b'], text: 'b', id: '8941e134-caeb-4598-9bdb-23656c80b3a7', dir: 'A₁ > A₂' }, { startNode: { left: 0.39473684210526316, top: 0.7177777777777777, center: { x: 0.4139254385964912, y: 0.7566666666666667 }, id: '7046ba4f-5126-4e0c-b3e1-f377705c5364', symbol: 'A₂' }, end: { x: 0.5701754385964912, y: 0.7322222222222222 }, width: 1824, endNode: { left: 0.549890350877193, top: 0.6966666666666667, center: { x: 0.569078947368421, y: 0.7355555555555555 }, id: '3d258834-9a3b-4f30-aa1d-6b9ad9f37409', symbol: 'A₃' }, acceptedSymbols: ['λ'], text: 'λ', id: '9ffadfe4-b825-405c-aa97-7e44a7d99706', dir: 'A₂ > A₃' }, { startNode: { left: 0.24342105263157895, top: 0.41555555555555557, center: { x: 0.26260964912280704, y: 0.45444444444444443 }, id: '12679d71-4ba3-4d6b-9b60-1e726da49d2b', symbol: 'A₄' }, end: { x: 0.42598684210526316, y: 0.45111111111111113 }, width: 1824, endNode: { left: 0.40844298245614036, top: 0.4255555555555556, center: { x: 0.4276315789473684, y: 0.46444444444444444 }, id: '41459a6f-67bd-42b4-ab86-430ec2ae96eb', symbol: 'A₅' }, acceptedSymbols: ['b'], text: 'b', id: '70847b7f-c316-4add-8017-3c5adeb489f9', dir: 'A₄ > A₅' }, { startNode: { left: 0.40844298245614036, top: 0.4255555555555556, center: { x: 0.4276315789473684, y: 0.46444444444444444 }, id: '41459a6f-67bd-42b4-ab86-430ec2ae96eb', symbol: 'A₅' }, end: { x: 0.5970394736842105, y: 0.4577777777777778 }, width: 1824, endNode: { left: 0.5783991228070176, top: 0.4222222222222222, center: { x: 0.5975877192982456, y: 0.46111111111111114 }, id: '17e4a4cd-20f7-4bc9-a577-90f341e32601', symbol: 'A₆' }, acceptedSymbols: ['b'], text: 'b', id: '29f5b8b5-834c-4482-a6fd-ca369d38c519', dir: 'A₅ > A₆' }, { startNode: { left: 0.24671052631578946, top: 0.2311111111111111, center: { x: 0.26589912280701755, y: 0.27 }, id: 'df330c54-6494-4269-8703-7802a1f6dd9e', symbol: 'A₈' }, end: { x: 0.38048245614035087, y: 0.3211111111111111 }, width: 1824, endNode: { left: 0.35855263157894735, top: 0.2822222222222222, center: { x: 0.37774122807017546, y: 0.3211111111111111 }, id: 'e35c4cee-0dba-4b19-93ed-cd495925d759', symbol: 'A₇' }, acceptedSymbols: ['a'], text: 'a', id: 'b85d186b-741e-4661-ae37-50053b2be254', dir: 'A₈ > A₇' }, { startNode: { left: 0.35855263157894735, top: 0.2822222222222222, center: { x: 0.37774122807017546, y: 0.3211111111111111 }, id: 'e35c4cee-0dba-4b19-93ed-cd495925d759', symbol: 'A₇' }, end: { x: 0.5926535087719298, y: 0.45555555555555555 }, width: 1824, endNode: { left: 0.5783991228070176, top: 0.4222222222222222, center: { x: 0.5975877192982456, y: 0.46111111111111114 }, id: '17e4a4cd-20f7-4bc9-a577-90f341e32601', symbol: 'A₆' }, acceptedSymbols: ['a'], text: 'a', id: 'ac4af32b-f66e-4825-95f9-c1c0a7694e49', dir: 'A₇ > A₆' }, { startNode: { left: 0.24342105263157895, top: 0.41555555555555557, center: { x: 0.26260964912280704, y: 0.45444444444444443 }, id: '12679d71-4ba3-4d6b-9b60-1e726da49d2b', symbol: 'A₄' }, end: { x: 0.3821271929824561, y: 0.32555555555555554 }, width: 1824, endNode: { left: 0.35855263157894735, top: 0.2822222222222222, center: { x: 0.37774122807017546, y: 0.3211111111111111 }, id: 'e35c4cee-0dba-4b19-93ed-cd495925d759', symbol: 'A₇' }, acceptedSymbols: ['a'], text: 'a', id: '1451ded1-8e93-4349-a2d8-f5ead2bf6258', dir: 'A₄ > A₇' }, { startNode: { left: 0.24342105263157895, top: 0.41555555555555557, center: { x: 0.26260964912280704, y: 0.45444444444444443 }, id: '12679d71-4ba3-4d6b-9b60-1e726da49d2b', symbol: 'A₄' }, end: { x: 0.41173245614035087, y: 0.7455555555555555 }, width: 1824, endNode: { left: 0.39473684210526316, top: 0.7177777777777777, center: { x: 0.4139254385964912, y: 0.7566666666666667 }, id: '7046ba4f-5126-4e0c-b3e1-f377705c5364', symbol: 'A₂' }, acceptedSymbols: ['b'], text: 'b', id: 'add408b7-47a1-4038-9c7a-35d2ea36f360', dir: 'A₄ > A₂' }],
		activeTab: 'dfa',
		currentAction: 'clear',
		readableLanguage: ['λ'],
	  change: (key) => (value) => this.setState({ [key]: value })
	}

	modifyState = (id, newState) => {
		const { states, change } = this.state;
		const modifiedStates = states
			.map((state) => state.id === id ? { ...state, ...newState } : state);
		change('states')(modifiedStates);
	}

	deleteState = (targetId) => {
		const { transitions, states, change } = this.state;
		const modifiedStates = states.filter(({ id }) => id !== targetId);
		const modifiedTransitions = transitions
			.filter((trans) => trans.startNode.id !== targetId && trans.endNode.id !== targetId);
		change('transitions')(modifiedTransitions);
		change('states')(modifiedStates);
	}

	createTransition = (newTransition) => {
		const { transitions, change } = this.state;
		const transitionsModified = transitions;
		newTransition.dir = `${newTransition.startNode.symbol} > ${newTransition.endNode.symbol}`;
		if (
			transitionsModified
				.filter(({ startNode: { id: startId }, endNode: { id: endId } }) =>
					newTransition.startNode.id === startId && newTransition.endNode.id === endId)
				.length === 0
		)
			transitionsModified.push(newTransition);
		change('transitions')(transitionsModified);
	}

	updateTransition = (updatedTransition) => {
		const { transitions, change, readableLanguage } = this.state;
		const previouslyAccepted = transitions
			.filter((tr) => tr.id === updatedTransition.id)[0]
			.acceptedSymbols;
		const newlyAccepted = updatedTransition.acceptedSymbols;
		const transitionsModified = transitions
			.map((transition) =>
				transition.id === updatedTransition.id
					? { ...transition, ...updatedTransition }
					: transition);

		const difference = {
			added: newlyAccepted.filter((sym) => !previouslyAccepted.includes(sym)),
			removed: previouslyAccepted.filter((sym) => !newlyAccepted.includes(sym))
		};

		const updatedReadableLanguage = [
			...difference.added,
			...readableLanguage.filter((sym) => !difference.removed.includes(sym))
		];
		change('readableLanguage')(updatedReadableLanguage);
		change('transitions')(transitionsModified);
	}

	render () {
	  const {
			change,
			states,
			activeTab,
			statesCeil,
			transitions,
			currentAction,
			readableLanguage
		} = this.state;
	  return (
			<div className='app'>
				<Tabs activeTab={activeTab} onTabChange={change('activeTab')} />
				{ activeTab === 'dfa' && (
					<DFA
						statesCeil={statesCeil}
						states={states}
						currentAction={currentAction}
						transitions={transitions}
						createState={(value) => {
							change('states')([...states, value]);
							change('statesCeil')(statesCeil + 1);
						}}
						createTransition={this.createTransition}
						updateTransition={this.updateTransition}
						startDrawing={() => change('currentAction')('drawing_transition')}
						cancelDrawing={() => change('currentAction')('clear')}
						stateObject={{
							modifyState: this.modifyState,
							deleteState: this.deleteState
						}}
					/>
				)
	      }
				{
					activeTab === 'tbl' && (
						<TransitionTable
							states={states}
							transitions={transitions}
							readableLanguage={readableLanguage}
						/>
					)
				}
			</div>
	  );
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
