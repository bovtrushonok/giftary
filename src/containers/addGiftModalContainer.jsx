import { connect } from 'react-redux';
import {
  addGiftActionCreator, addNewGiftNameActionCreator, addNewGiftLinkActionCreator,
  addNewGiftDescriptionActionCreator, closeModalActionCreator,
} from '../redux/actions';
import { AddGiftModal } from '../components';

function mapStateToProps(state) {
  return {
    newGift: state.profilePage.newGiftData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGift: () => dispatch(addGiftActionCreator()),
    changeGiftName: (value) => {
      dispatch(addNewGiftNameActionCreator(value));
    },
    changeGiftLink(value) {
      dispatch(addNewGiftLinkActionCreator(value));
    },
    changeGiftDescription(value) {
      dispatch(addNewGiftDescriptionActionCreator(value));
    },
    closeModalWindow() {
      dispatch(closeModalActionCreator());
    },
  };
}

export const AddGiftModalContainer = connect(mapStateToProps, mapDispatchToProps)(AddGiftModal);
