import React, { createRef } from 'react';
import { iModalProps } from '../types/interfaces';
import { addEventActionCreator } from '../redux/profilePageReducers';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews/index';

export const AddEventModal: React.FC<iModalProps> = ({ dispatch }: iModalProps) => {
  const eventNameInput = createRef<HTMLInputElement>();
  const eventDayInput = createRef<HTMLInputElement>();

  function addEvent() {
    const currentEventNameInput = eventNameInput.current;
    const currentEventDayInput = eventDayInput.current;

    if (currentEventNameInput && currentEventDayInput) {
      const eventName = currentEventNameInput.value;
      const eventDay = currentEventDayInput.value;
      return dispatch(addEventActionCreator(eventName, eventDay));
    }

    return undefined;
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
