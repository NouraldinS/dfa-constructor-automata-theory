import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DFA from './components/DFA';
import Tabs from './components/Tabs';
import TransitionTable from './components/TransitionTable';

import './index.less';

class App extends Component {
	state = {
	  states: [],
		statesCeil: 0,
		tempNode: null,
	  transitions: [],
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
