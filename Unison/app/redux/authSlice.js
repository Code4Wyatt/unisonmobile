import {createSlice} from '@reduxjs/toolkit';
import {getUserDetails, registerUser, userLogin} from './authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

// initialize userToken from local storage
const userToken = AsyncStorage.getItem('userToken')
  ? AsyncStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      AsyncStorage.removeItem('userToken'); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: state => {
      state.loading = true;
      state.error = null;
      state.userToken = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      // state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
    // // get user details
    [getUserDetails.pending]: state => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [getUserDetails.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;
