import { connect } from 'react-redux';
import { deleteItem, editItem } from '../redux/actions/profile';
import { Gifts } from '../components';

function mapStateToProps(state) {
  return {
    gifts: state.profilePage.giftsData,
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

export const GiftsContainer = connect(mapStateToProps, mapDispatchToProps)(Gifts);
