import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';

import { Profile } from 'components/Profile';
import { ProfileList } from './ProfileBoard.styled';

export const ProfileBoard = () => {
  const { users } = useSelector(selectUsers);

  console.log(users);

  return (
    <ProfileList>
      {users.map(user => (
        <Profile key={user.id} user={user} />
      ))}
    </ProfileList>
  );
};
