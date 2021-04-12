import { connect } from 'react-redux';
import { openModalActionCreator } from '../redux/actions';
import { OpenModalButton } from '../components';

function mapDispatchToProps(dispatch) {
  return {
    openModal: () => {
      dispatch(openModalActionCreator());
    },
  };
}

export const OpenModalButtonContainer = connect(null, mapDispatchToProps)(OpenModalButton);
