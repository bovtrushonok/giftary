import React from 'react';
import { ISwitcher } from '../types';
import { Switch, Slider, InputCheckbox } from '../sharedViews';

export const SwitchComponent: React.FC<ISwitcher> = ({ changeMode }) => {
  function onChangeMode() {
    changeMode();
  }

  return (
    <Switch>
      <InputCheckbox onChange={onChangeMode} />
      <Slider />
      <span>My gifts &#127873;</span>
      <span>My events &#127881;</span>
    </Switch>
  );
};
