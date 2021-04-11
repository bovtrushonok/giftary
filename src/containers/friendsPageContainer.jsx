import React from 'react';
import { connect } from 'react-redux';
import { FriendsList } from '../pages/friendsList';

function mapStateToProps(state) {
  return {
    friends: state.friendsPage.friendsData,
  };
}

export const FriendsPageContainer = connect(mapStateToProps)(FriendsList);
