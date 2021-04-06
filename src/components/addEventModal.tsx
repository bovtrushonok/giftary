import React from 'react';
import { IEventModal } from '../types/interfaces';
import {
  addEventActionCreator, addNewEventNameActionCreator, addNewEventDayActionCreator,
  addNewEventMonthActionCreator,
} from '../redux/modalsReducers';
import { closeModalActionCreator } from '../redux/profilePageReducers';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews/index';

export const AddEventModal: React.FC<IEventModal> = ({ dispatch, newEvent }) => {
  function changeEventName(e: React.FormEvent<HTMLInputElement>) {
    dispatch(addNewEventNameActionCreator(e.currentTarget.value));
  }

  function changeEventDay(e: React.FormEvent<HTMLInputElement>) {
    dispatch(addNewEventDayActionCreator(e.currentTarget.value));
  }

  function changeEventMonth(e: React.FormEvent<HTMLInputElement>) {
    dispatch(addNewEventMonthActionCreator(e.currentTarget.value));
  }

  function addEvent() {
    return dispatch(addEventActionCreator());
  }

  function closeModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return dispatch(closeModalActionCreator());
  }

  return (
    <Overlay onClick={closeModalWindow}>
      <Modal>
        <Input id="eventName" type="text" placeholder="Event" onChange={changeEventName} value={newEvent.eventName} />
        <Input id="eventDay" type="text" placeholder="Add day as DD" onChange={changeEventDay} value={newEvent.eventDay} />
        <Input id="eventMonth" type="text" placeholder="Add month as MM" onChange={changeEventMonth} value={newEvent.eventMonth} />
        <Button onClick={addEvent}> Add event </Button>
      </Modal>
    </Overlay>
  );
};
