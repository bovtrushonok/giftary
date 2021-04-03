export const state = {
  eventsPage: {
    friendsEventsList: [
      {
        friendName: 'good friend', friendAvatar: '🐞', eventName: 'First event', eventDay: '26', eventMonth: 'March', id: '0',
      },
      {
        friendName: 'another friend', friendAvatar: '🐞', eventName: 'second event', eventDay: '26', eventMonth: 'April', id: '1',
      },
    ],
  },
  friendsPage: {
    friendsData: [
      { friendName: 'good friend', friendAvatar: '🐞', id: '0' },
      { friendName: 'another good friend', friendAvatar: '🐞', id: '1' },
    ],
  },
  profilePage: {
    userId: 0,
    mode: 'onGift', // or onEvent
    addMode: 'false',
    giftsData: [
      {
        giftName: 'First gift', giftLink: 'some link', giftDescription: 'awesome present', id: '0',
      },
      {
        giftName: 'Second gift', giftLink: 'another link', giftDescription: 'cool present', id: '1',
      },
    ],
    eventsData: [
      {
        eventName: 'First event', eventDay: '26', eventMonth: 'March', id: '0',
      },
      {
        eventName: 'Second event', eventDay: '26', eventMonth: 'April', id: '1',
      },
    ],
  },

  addEvent(eventName, eventDate) {
    this.profilePage.eventsData.push({
      eventName, eventDay: eventDate.slice(0, 2), eventMonth: eventDate.slice(2, 5), id: '2',
    });
  },
};
