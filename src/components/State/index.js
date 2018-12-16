import React from 'react';

import './index.less';

const State = (props) => {
  const { top, left, symbol } = props;
  const stateFunctions = {
    onClick () {

    },
    onMouseMove () {

    },
    onMouseDown () {

    },
    onMouseUp () {

    },
    onMouseLeave () {

    }
  };
  const transitionAdderFunctions = {
    onMouseDown () {

    }
  };

  return (
    <div
      className='state-wrapper'
      style={{ top: top - 35, left: left - 35 }}
    >
      <div
        className='state'
        {...stateFunctions}
      >
        <span className='add-transition'>+</span>
        {symbol}
      </div>
    </div>
  );
};

export default State;
