import styled from 'styled-components';
import * as color from '../constants/colors';

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
  background-color: ${color.secondaryLLBc};
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