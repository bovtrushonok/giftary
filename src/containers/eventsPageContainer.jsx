import React from 'react';
import { connect } from 'react-redux';
import EventListPage from '../pages/eventsList';

function mapStateToProps(state) {
  return {
    friendEvents: state.eventsPage.friendsEventsList,
  };
}

export const EventsPageContainer = connect(mapStateToProps)(EventListPage);
