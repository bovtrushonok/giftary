import React from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { profileProps } from '../types/interfaces';
import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { SwitchComponent } from '../components/switcher';
import { MyEvent } from '../components/myEvent';
import { MyGift } from '../components/myGift';
import { Wrapper } from '../sharedViews/wrapper';
import { Content } from '../sharedViews/contentWrap';
import { List } from '../sharedViews/list';
import { IconWrapper } from '../sharedViews/profileIconWrapper';

const ProfilePage: React.FC<profileProps> = ({ events, gifts } : profileProps) => {
  const giftItems = gifts.map((g) => (
    <MyGift
      giftName={g.giftName}
      giftLink={g.giftLink}
      giftDescription={g.giftDescription}
      id={g.id}
    />
  ));

  const eventItems = events.map((item) => (
    <MyEvent
      eventName={item.eventName}
      eventDay={item.eventDay}
      eventMonth={item.eventMonth}
      id={item.id}
    />
  ));

  return (
    <Wrapper>
      <Content>
        <Header />
        <SwitchComponent />
        <List>
          {giftItems}
          {eventItems}
        </List>
        <IconWrapper>
          <AddBoxRoundedIcon />
          <span>Add gifts to your wish list</span>
        </IconWrapper>
      </Content>
      <BottomNav />
    </Wrapper>
  );
};

export default ProfilePage;
