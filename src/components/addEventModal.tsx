import React from 'react';
import { iModalProps } from '../types/interfaces';
import { addEventActionCreator } from '../redux/profilePageReducers';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews/index';

export const AddEventModal: React.FC<iModalProps> = ({ dispatch }) => {
  const eventNameInput = React.createRef<HTMLInputElement | null>();
  const eventDayInput = React.createRef<HTMLInputElement | null>();

  function addEvent() {
    const currentEventNameInput = eventNameInput.current;
    const currentEventDayInput = eventDayInput.current;

    if (currentEventNameInput && currentEventDayInput) {
      const eventName = currentEventNameInput.value;
      const eventDay = currentEventDayInput.value;
      return dispatch(addEventActionCreator(eventName, eventDay));
    }
  }

  return (
    <Overlay>
      <Modal>
        <Input id="eventName" type="text" placeholder="Event" ref={eventNameInput} />
        <Input id="eventDay" type="text" placeholder="Add date as DD/MM" ref={eventDayInput} />
        <Button onClick={addEvent}> Add event </Button>
      </Modal>
    </Overlay>
  );
};
