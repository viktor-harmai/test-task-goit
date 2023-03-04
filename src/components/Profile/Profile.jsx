import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/usersSlice';

import LogoSvg from 'img/Logo.svg';
import { Button } from 'components/Button';
import Numeral from 'react-numeral';

import {
  ProfileItem,
  ProfileCard,
  Logo,
  ProfileCardWrap,
  ProfileCardThumb,
  Avatar,
  Name,
  Stats,
  Item,
  Background,
  Rectangle,
  Circle,
  Inner,
} from './Profile.styled';

export const Profile = ({
  user: { id, username, tweets, followers, avatar, btnClick },
}) => {
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    if (!btnClick) {
      dispatch(increment(id));
    } else {
      dispatch(decrement(id));
    }
  };

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

          <Name>{username}</Name>

          <Stats>
            <Item>
              <span>{tweets}</span>
              <span> Tweets</span>
            </Item>
            <Item>
              <Numeral value={followers} format={'0,0'} />
              <span> Followers</span>
            </Item>
          </Stats>

          <Button onClick={handleBtnClick} btnClick={btnClick} />
        </ProfileCardWrap>
        <Background></Background>
      </ProfileCard>
    </ProfileItem>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  btnClick: PropTypes.bool,
};
