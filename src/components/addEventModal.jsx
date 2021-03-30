import { Modal } from '../sharedViews/modals';
import { Button } from '../sharedViews/button';
import { Input } from '../sharedViews/input';

export const AddEventModal = () => {
  return (
    <Modal>
      <Input id="eventName" type="text" placeholder="Event"/>
      <Input id="eventDay" type="text" placeholder="Add date as DD/MM/YYYY"/> 
      <Button> Add event </Button>
    </Modal>
  )
}
