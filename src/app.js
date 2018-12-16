import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DFA from './components/DFA';
import Tabs from './components/Tabs';

import './index.less';

class App extends Component {
	state = {
	  activeTab: 'dfa',
	  states: [],
	  transitions: [],
	  onChange: (key) => (value) => this.setState({ [key]: value })
	}
	render () {
	  const { activeTab, onChange, states, transitions } = this.state;
	  console.log('this.state', this.state);
	  return (
		<div className='app'>
		<Tabs activeTab={activeTab} onTabChange={onChange('activeTab')} />
		{ activeTab === 'dfa' && (
	        <DFA
			states={states}
			transitions={transitions}
			createState={(value) => onChange('states')([...states, value])}
		/>
	      )
	      }
	    </div>
	  );
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
