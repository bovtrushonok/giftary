import styled from 'styled-components';
import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import { EventListItem }  from "../partials/listItem";
import List from "../partials/list";
import { FriendInfo, Avatar } from "./eventsList";

export const PageIntroduction = styled.section`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: space-between;
  margin: 10px 5px;
  span {
    display: block;
    width: 100%;
  }
`;

const FriendsList = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PageIntroduction>
          <h1>Friends</h1>
          <span>Invite your friends, get access to their wishes and don't forget important dates &#129395; </span>
        </PageIntroduction>
        <List>
          <FriendInfo>
            <Avatar />
            <EventListItem>
              <div>
                <span>Friend's Name</span>
              </div>
            </EventListItem>
          </FriendInfo>
        </List>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default FriendsList;