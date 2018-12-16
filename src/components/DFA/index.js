import React from 'react';
import PropTypes from 'prop-types';

import State from '../State';
import { getRelativeLeftAndTop, getCharacterAtIndex } from '../../helpers';

import './index.less';

const DFA = (props) => {
  const { states } = props;
  const spaceFunctions = {
    onClick (clickEvent) {
      const { createState } = props;
      const numberOfStates = states.length;
      const [relativeLeftToSpace, relativeTopToSpace] = getRelativeLeftAndTop(clickEvent);
      const newStateObject = {
        left: relativeLeftToSpace,
        top: relativeTopToSpace,
        id: relativeTopToSpace * 1000 + relativeLeftToSpace,
        symbol: getCharacterAtIndex('A', numberOfStates)
      };
      createState(newStateObject);
    }
  };

  return (
    <div className={'space'} {...spaceFunctions}>
      {
        states.map(({ id, ...state }) => <State key={id} {...state} />)
      }
    </div>
  );
};

DFA.propTypes = {
  // states: PropTypes.arrayOf({ left: PropTypes.number, top: PropTypes.number }).isRequired
};

export default DFA;
