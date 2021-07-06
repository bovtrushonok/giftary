import { connect } from 'react-redux';
import { deleteItem, editItem } from '../redux/actions/profile';
import { Events } from '../components';

function mapStateToProps(state) {
  return {
    events: state.profilePage.eventsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editItem(id) {
      dispatch(editItem(id));
    },
    deleteItem(id) {
      dispatch(deleteItem(id));
    },
  };
}

export const EventsContainer = connect(mapStateToProps, mapDispatchToProps)(Events);
