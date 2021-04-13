import React, { useState } from 'react';
import { IEventModal } from '../types';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews';

export const AddEventModal: React.FC<IEventModal> = ({ addEvent, closeModalWindow }) => {
  const [eventName, setEventName] = useState('');
  const [eventDay, setEventDay] = useState('');
  const [eventMonth, setEventMonth] = useState('');

  function onChangeEventName(e: React.FormEvent<HTMLInputElement>) {
    setEventName(e.currentTarget.value);
  }

  function onChangeEventDay(e: React.FormEvent<HTMLInputElement>) {
    setEventDay(e.currentTarget.value);
  }

  function onChangeEventMonth(e: React.FormEvent<HTMLInputElement>) {
    setEventMonth(e.currentTarget.value);
  }

  function onAddEvent() {
    return addEvent(eventName, eventDay, eventMonth);
  }

  function onCloseModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return closeModalWindow();
  }

  return (
    <Overlay onClick={onCloseModalWindow}>
      <Modal>
        <Input id="eventName" type="text" placeholder="Event" onChange={onChangeEventName} value={eventName} />
        <Input id="eventDay" type="text" placeholder="Add day as DD" onChange={onChangeEventDay} value={eventDay} />
        <Input id="eventMonth" type="text" placeholder="Add month as MM" onChange={onChangeEventMonth} value={eventMonth} />
        <Button onClick={onAddEvent}> Add event </Button>
      </Modal>
    </Overlay>
  );
};
