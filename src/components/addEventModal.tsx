import React from 'react';
import { IEventModal } from '../types';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews';

export const AddEventModal: React.FC<IEventModal> = ({
  changeEventName, changeEventDay, changeEventMonth, addEvent, closeModalWindow, newEvent,
}) => {
  function onChangeEventName(e: React.FormEvent<HTMLInputElement>) {
    changeEventName(e.currentTarget.value);
  }

  function onChangeEventDay(e: React.FormEvent<HTMLInputElement>) {
    changeEventDay(e.currentTarget.value);
  }

  function onChangeEventMonth(e: React.FormEvent<HTMLInputElement>) {
    changeEventMonth(e.currentTarget.value);
  }

  function onAddEvent() {
    return addEvent();
  }

  function onCloseModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return closeModalWindow();
  }

  return (
    <Overlay onClick={onCloseModalWindow}>
      <Modal>
        <Input id="eventName" type="text" placeholder="Event" onChange={onChangeEventName} value={newEvent.eventName} />
        <Input id="eventDay" type="text" placeholder="Add day as DD" onChange={onChangeEventDay} value={newEvent.eventDay} />
        <Input id="eventMonth" type="text" placeholder="Add month as MM" onChange={onChangeEventMonth} value={newEvent.eventMonth} />
        <Button onClick={onAddEvent}> Add event </Button>
      </Modal>
    </Overlay>
  );
};
