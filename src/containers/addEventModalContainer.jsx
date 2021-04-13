import { connect } from 'react-redux';
import { AddEventModal } from '../components';
import { addEventActionCreator, closeModalActionCreator } from '../redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    addEvent(eventName, eventDay, eventMonth) {
      const newEvent = { eventName, eventDay, eventMonth };
      dispatch(addEventActionCreator(newEvent));
    },
    closeModalWindow: () => {
      dispatch(closeModalActionCreator());
    },
  };
}

export const AddEventModalContainer = connect(null, mapDispatchToProps)(AddEventModal);
