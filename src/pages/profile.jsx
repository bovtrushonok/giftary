import styled from 'styled-components';
import { Header } from "../components/header";
import { BottomNav } from '../components/bottomNav';
import { Wrapper } from "../sharedViews/wrapper";
import { Content } from "../sharedViews/contentWrap";
import { List } from "../sharedViews/list";
import { GiftListItem, EventListItem, FriendGiftListItem}  from "../sharedViews/listItem";
import { SwitchComponent } from "../components/switcher";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import * as color from '../constants/colors';

const IconWrapper = styled.div `
  display: flex;
  flex-flow: column wrap;
  justify-items: flex-start;
  align-items: flex-end;
  width: 25%;
  align-self: flex-end;
  justify-self: flex-end;

  span {
    display: none;
    font-style: italic;
    color: ${color.primaryText};
  }

  svg {
    font-size: 4em;
    color: ${color.secondaryIcon};
    display: flex;
    align-self: flex-end;
  }
  svg:hover {
    color: ${color.secondaryDarkenIcon};
    cursor: pointer;
  }

  svg:hover + span {
    display: inline-block;
  }
`;

const ProfilePage = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <SwitchComponent />
        <List> 
          <GiftListItem>
            <div>
              <div>
                <span>First gift</span>
                <span>Link</span>
                <span>Description</span>
              </div>
            </div>
          </GiftListItem>
          <FriendGiftListItem>
            <div>
              <div>
                <span>First friend's gift</span>
                <span>Link</span>
                <span>Description</span>
              </div>
              <input type="checkbox" />
            </div>
          </FriendGiftListItem>
          <EventListItem>
            <div>
              <span>First event</span>
              
              <div>
                <span> 26 </span>
                <span> March </span>
              </div>
            </div>
          </EventListItem>
        </List>
        <IconWrapper>
          <AddBoxRoundedIcon />
          <span>Add gifts to your wish list</span>
        </IconWrapper>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default ProfilePage;
