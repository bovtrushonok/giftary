import React from 'react';
import { changeModeActionCreator } from '../redux/actions';
import { ISwitcher } from '../types/interfaces';
import { Switch, Slider, InputCheckbox } from '../sharedViews';

export const SwitchComponent: React.FC<ISwitcher> = ({ dispatch }) => {
  function changeMode() {
    dispatch(changeModeActionCreator());
  }

  return (
    <Switch>
      <InputCheckbox onChange={changeMode} />
      <Slider />
      <span>My gifts &#127873;</span>
      <span>My events &#127881;</span>
    </Switch>
  );
};
