import { useSelector } from 'react-redux';
import {
  selectUsers,
  // selectIsClick
} from 'redux/selectors';

import { Profile } from 'components/Profile';
import { ProfileList } from './ProfileBoard.styled';

export const ProfileBoard = () => {
  const { users } = useSelector(selectUsers);
  // const isClick = useSelector(selectIsClick);

  console.log(users);

  return (
    <ProfileList>
      {users.map(user => (
        <Profile key={user.id} user={user} />
      ))}
    </ProfileList>
  );
};
