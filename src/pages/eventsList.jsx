import styled from 'styled-components';
import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import { PageIntroduction } from "./friendsList";
import List from "../partials/list";
import { EventListItem }  from "../partials/listItem";

export const FriendInfo = styled.section`
  display: flex;
  width: 100%;
  padding: 0;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 3em;
  padding: 0 5px;
  background-color: #ffebee;
  border-radius: 14px;
  margin-right: -5px;
`;

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <span>&#128030;</span>
    </AvatarWrapper>
  )
}

const EventListPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PageIntroduction>
          <h1>Events</h1>
        </PageIntroduction>
        <List>
          <FriendInfo>
            <Avatar />
            <EventListItem>
            <div>
              <span>Friend's Name</span>
              <div>
                <span> 26 </span>
                <span> March </span>
              </div>
              <p>Event type</p>
            </div>
            </EventListItem>
          </FriendInfo>
        </List>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default EventListPage;