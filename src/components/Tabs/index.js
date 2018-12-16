import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

const tabs = [
	{ id: 'dfa', text: 'DFA'},
	{ id: 'tst', text: 'Test Input'},
	{ id: 'tbl', text: 'Transition Tabel'},
];

const Tabs = ({ onTabChange, activeTab }) => (
	<div className='tabs'>
		{
			tabs.map(({id, text}) => (
				<div
					key={id}
					className={classNames('tab', activeTab === id && 'active')}
					onClick={() => onTabChange(id)}
				>
					{text}
				</div>
			))
		}
	</div>
);

Tabs.propTypes = {
	activeTab: PropTypes.string.isRequired,
	onTabChange: PropTypes.func.isRequired
};

export default Tabs;
