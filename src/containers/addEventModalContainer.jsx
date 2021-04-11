import React from 'react';
import { connect } from 'react-redux';
import { AddEventModal } from '../components';
import {
  addEventActionCreator, addNewEventNameActionCreator, addNewEventDayActionCreator,
  addNewEventMonthActionCreator, closeModalActionCreator,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    newEvent: state.profilePage.newEventData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeEventName: (value) => {
      dispatch(addNewEventNameActionCreator(value));
    },
    changeEventDay: (value) => {
      dispatch(addNewEventDayActionCreator(value));
    },
    changeEventMonth: (value) => {
      dispatch(addNewEventMonthActionCreator(value));
    },
    addEvent() {
      dispatch(addEventActionCreator());
    },
    closeModalWindow: () => {
      dispatch(closeModalActionCreator());
    },
  };
}

export const AddEventModalContainer = connect(mapStateToProps, mapDispatchToProps)(AddEventModal);
