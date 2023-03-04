import {
  ProfileItem,
  ProfileCard,
  Logo,
  ProfileCardWrap,
  ProfileCardThumb,
  Avatar,
  Stats,
  Item,
  Background,
  Rectangle,
  Circle,
  Inner,
} from './Profile.styled';

import LogoSvg from 'img/Logo.svg';

import { Button } from 'components/Button';

export const Profile = ({ user: { id, tweets, followers, avatar } }) => {
  return (
    <ProfileItem>
      <ProfileCard>
        <Logo src={LogoSvg} alt="Logo GOIT" width="76" height="22" />

        <ProfileCardWrap>
          <ProfileCardThumb>
            <Rectangle>
              <Circle>
                <Inner>
                  <Avatar src={avatar} alt="User avatar" />
                </Inner>
              </Circle>
            </Rectangle>
          </ProfileCardThumb>

          <Stats>
            <Item>
              <span>{tweets}</span>
              <span> Tweets</span>
            </Item>
            <Item>
              <span>{followers}</span>
              <span> Followers</span>
            </Item>
          </Stats>
          <Button />
        </ProfileCardWrap>
        <Background></Background>
      </ProfileCard>
    </ProfileItem>
  );
};
