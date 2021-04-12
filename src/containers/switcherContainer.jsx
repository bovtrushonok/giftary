import React from 'react';
import { connect } from 'react-redux';
import { changeModeActionCreator } from '../redux/actions';
import { SwitchComponent } from '../components';

function mapDispatchToProps(dispatch) {
  return {
    changeMode: () => {
      dispatch(changeModeActionCreator());
    },
  };
}

export const SwitcherContainer = connect(null, mapDispatchToProps)(SwitchComponent);
