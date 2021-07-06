import { connect } from 'react-redux';
import { ProfilePage } from '../pages/profile';

function mapStateToProps({ profilePage }) {
  return {
    gifts: profilePage.giftsData,
    events: profilePage.eventsData,
    mode: profilePage.mode,
    addMode: profilePage.addMode,
  };
}

export const ProfilePageContainer = connect(mapStateToProps)(ProfilePage);
