import { connect } from 'react-redux';
import { addGiftActionCreator, closeModalActionCreator } from '../redux/actions';
import { AddGiftModal } from '../components';

function mapDispatchToProps(dispatch) {
  return {
    addGift(newGiftData) {
      dispatch(addGiftActionCreator(newGiftData));
    },
    closeModalWindow() {
      dispatch(closeModalActionCreator());
    },
  };
}

export const AddGiftModalContainer = connect(null, mapDispatchToProps)(AddGiftModal);
