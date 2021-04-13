import { connect } from 'react-redux';
import { addGiftActionCreator, closeModalActionCreator } from '../redux/actions';
import { AddGiftModal } from '../components';

function mapDispatchToProps(dispatch) {
  return {
    addGift(giftName, giftLink, giftDescription) {
      const newGift = { giftName, giftLink, giftDescription };
      dispatch(addGiftActionCreator(newGift));
    },
    closeModalWindow() {
      dispatch(closeModalActionCreator());
    },
  };
}

export const AddGiftModalContainer = connect(null, mapDispatchToProps)(AddGiftModal);
