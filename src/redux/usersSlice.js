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
    increment(state, action) {
      const user = state.users.find(user => user.id === action.payload);
      user.followers += 1;
      user.btnClick = true;
      toast.success(
        `Added follower for ${user.username}. All fillovers: ${user.followers}`,
        toastOptions
      );
    },

    decrement(state, action) {
      const user = state.users.find(user => user.id === action.payload);
      user.followers -= 1;
      user.btnClick = false;
      toast.warn(
        `Removed follower for ${user.username}.
        All fillovers:${user.followers}`,
        toastOptions
      );
    },
  },
});

export const { increment, decrement } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
