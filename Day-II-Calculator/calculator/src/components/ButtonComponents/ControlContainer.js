import React from 'react';
import NumberButtons from './NumberButton';
import ActionButtons from './ActionButton';
import './ControlContainer.css';

const ButtonContainer = props => {
  return (
      <div class='controlContainer'>
        <NumberButtons />
        <ActionButtons />
      </div>
  );
};

export default ButtonContainer;