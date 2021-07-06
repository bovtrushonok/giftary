import { connect } from 'react-redux';
import { openModal } from '../redux/actions';
import { OpenModalButton } from '../components';

export const OpenModalButtonContainer = connect(null, { openModal })(OpenModalButton);
