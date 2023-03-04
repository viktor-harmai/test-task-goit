import { createSlice } from '@reduxjs/toolkit';

import users from 'data/users.json';

const usersInitialState = {
  users,
  isClick: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    addFollower(state, action) {
      const user = state.users.find(user => user.id === action.payload);
      console.log(user);

      state.isClick = true;
    },
    decrementFollowesr(state, action) {},
  },
});
export const usersReducer = usersSlice.reducer;
