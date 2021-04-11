import React from 'react';
import { connect } from 'react-redux';
import { ProfilePage } from '../pages/profile';

function mapStateToProps(state) {
  return {
    gifts: state.profilePage.giftsData,
    events: state.profilePage.eventsData,
    mode: state.profilePage.mode,
    addMode: state.profilePage.addMode,
  };
}

export const ProfilePageContainer = connect(mapStateToProps)(ProfilePage);
