import { createSlice } from '@reduxjs/toolkit';

import users from 'data/users.json';

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
      console.log(user.username);
      console.log(user.id);
      console.log(action.payload);
      console.log(user.btnClick);

      state.isClick = true;
    },
    decrement(state, action) {
      const user = state.users.find(user => user.id === action.payload);
      user.followers -= 1;
      user.btnClick = false;
      state.isClick = false;
    },
  },
});

export const { increment, decrement } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
