import React from 'react';
import { Modal } from '../sharedViews/modal';
import { Button } from '../sharedViews/button';
import { Input } from '../sharedViews/input';
import { Overlay } from '../sharedViews/modalOverlay';

export const AddEventModal = () => {
  const eventNameInput = React.createRef();
  const eventDayInput = React.createRef();

  const addEvent = () => {
    const eventName = eventNameInput.current.value;
    const eventDay = eventDayInput.current.value;

    return (eventName, eventDay);
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
