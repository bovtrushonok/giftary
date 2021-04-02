import React from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { SwitchComponent } from '../components/switcher';
import { MyEvent, eventProps } from '../components/myEvent.tsx';
import { MyGift, giftProps } from '../components/myGift.tsx';
import { Wrapper } from '../sharedViews/wrapper';
import { Content } from '../sharedViews/contentWrap';
import { List } from '../sharedViews/list';
import { IconWrapper } from '../sharedViews/profileIconWrapper';

interface profileProps {
  events: Array<eventProps>;
  gifts: Array<giftProps>;
}

const ProfilePage: React.FC<profileProps> = ({ events, gifts } : profileProps) => {
  const giftItems = gifts.map((g) => (
    <MyGift
      giftName={g.giftName}
      giftLink={g.giftLink}
      giftDescription={g.giftDescription}
      key={g.id}
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
