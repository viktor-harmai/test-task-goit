// import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import Numeral from 'react-numeral';

import { increment, decrement } from 'redux/usersSlice';

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

export const Profile = ({
  user: { id, tweets, followers, avatar, btnClick },
}) => {
  // const formatFollowers = new Numeral(followers).format('0,0');

  const dispatch = useDispatch();

  const handleBtnClick = () => {
    if (!btnClick) {
      dispatch(increment(id));
    } else {
      dispatch(decrement(id));
    }
  };

  // const handleIncrement = () => dispatch(increment(id));
  // const handleDecrement = () => dispatch(decrement(id));

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
              <Numeral value={followers} format={'0,0'} />
              {/* <span>{formatFollowers}</span> */}
              <span> Followers</span>
            </Item>
          </Stats>
          {/* {!btnClick ? (
            <Button onClick={handleIncrement} text={'Follow'} />
          ) : (
            <Button onClick={handleDecrement} text={'Following'} />
          )} */}
          <Button onClick={handleBtnClick} btnClick={btnClick} />
        </ProfileCardWrap>
        <Background></Background>
      </ProfileCard>
    </ProfileItem>
  );
};

// Profile.propTypes = {
//   user: PropTypes.exact({
//     id: PropTypes.number.isRequired,
//     tweets: PropTypes.number.isRequired,
//     followers: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//   }),
// };
