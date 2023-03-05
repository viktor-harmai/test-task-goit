import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import users from 'data/users.json';

const toastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  theme: 'dark',
};

const usersInitialState = {
  users,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    toggleBtn(state, action) {
      for (const user of state.users) {
        if (!user.btnClick) {
          if (user.id === action.payload) {
            user.followers += 1;
            user.btnClick = !user.btnClick;

            toast.success(
              `Added follower for ${user.username}. All fillovers: ${user.followers}`,
              toastOptions
            );
            break;
          }
        } else {
          if (user.id === action.payload) {
            user.followers -= 1;
            user.btnClick = !user.btnClick;
            toast.warn(
              `Removed follower for ${user.username}.
              All fillovers:${user.followers}`,
              toastOptions
            );
            break;
          }
        }
      }
    },
  },
});

export const { toggleBtn } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
