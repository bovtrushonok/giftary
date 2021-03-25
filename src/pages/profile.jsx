import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import styled from "styled-components";

const ProfileWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const ProfilePage = () => {
  return (
    <ProfileWrapper>
      <ProfileContent>
        <Header />
        <div> </div>
      </ProfileContent>
      <BottomNav />
    </ProfileWrapper>
  )
}

export default ProfilePage;