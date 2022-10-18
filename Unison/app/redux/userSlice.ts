import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
let id = 0;

export const userSlice = createSlice({
  name: 'currentUser',
  initialState: {
    currentUser: [],
  },
  reducers: {
    addCurrentUser: (state, action) => {
      state.currentUser = [...state.currentUser, {currentUser: action.payload}];
    },
    removeCurrentUser: (state, action) => {
      state.currentUser = [...state.currentUser.filter(currentUser => currentUser.id != action.payload)];
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = userSlice.actions;

export const currentUser = state => state.currentUser;

export default userSlice.reducer;