import React from 'react';
import { iModalProps } from '../types/interfaces';
import { addEventActionCreator } from '../redux/profilePageReducers';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews/index';

export const AddEventModal: React.FC<iModalProps> = ({ dispatch }: iModalProps) => {
  const eventNameInput: any = React.createRef();
  const eventDayInput: any = React.createRef();

  const addEvent = () => {
    const eventName = eventNameInput.current.value;
    const eventDay = eventDayInput.current.value;

    return dispatch(addEventActionCreator(eventName, eventDay));
  };

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
