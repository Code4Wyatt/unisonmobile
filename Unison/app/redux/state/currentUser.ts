import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface CurrentUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface CurrentUserState {
  user: CurrentUser[];
}

const initialState: CurrentUserState = {
  user: [],
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addCurrentUser: (state: RootState, action: PayloadAction<CurrentUser>) => {
      state.currentUser = [...state.currentUser, action.payload];
    },
      removeCurrentUser: (state: RootState) => {
        state.currentUser = state.currentUser.slice(1, state.currentUser.length)
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser.user[0];

export default currentUserSlice.reducer;