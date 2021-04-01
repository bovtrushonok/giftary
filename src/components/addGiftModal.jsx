import { Modal } from '../sharedViews/modal';
import { Button } from '../sharedViews/button';
import { TextArea } from '../sharedViews/textArea';
import { Input } from '../sharedViews/input';
import { InputBlock } from '../sharedViews/form';

export const AddGiftModal = () => (
  <Modal>
    <InputBlock>
      <Input id="giftName" type="text" placeholder="Gift" />
      <Input id="giftLink" type="text" placeholder="Link" />
    </InputBlock>
    <TextArea placeholder="Description" />
    <Button>Add gift</Button>
  </Modal>
);
