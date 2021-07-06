import { connect } from 'react-redux';
import { AddEventModal } from '../components';
import { addEventActionCreator, closeModalActionCreator } from '../redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    addEvent(newEventData) {
      dispatch(addEventActionCreator(newEventData));
    },
    closeModalWindow: () => {
      dispatch(closeModalActionCreator());
    },
  };
}

export const AddEventModalContainer = connect(null, mapDispatchToProps)(AddEventModal);
