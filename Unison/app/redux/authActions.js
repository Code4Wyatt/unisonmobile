import axios from '../api/ApiManager';
import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';



export const userLogin = createAsyncThunk(
  'user/login',
  ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      AsyncStorage.setItem('email', email);

      const {data} = axios.post(
        'http://10.0.2.2:5050/auth/login',
        {email, password},
        config,
      ).then((response) => {
        console.log(response.data.accessToken)
        const token = JSON.stringify(response.data.accessToken)
        console.log(token)
        AsyncStorage.setItem('userToken', token);
    
        
       
      }).catch((err) => {
        console.error(err)
      });
    AsyncStorage.setItem('userToken', token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/register',
  async ({firstName, email, password}, {rejectWithValue}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        '/api/user/register',
        {firstName, email, password},
        config,
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, {getState, rejectWithValue}) => {
    try {
      // get user data from store
      const { user } = getState();
      let token = AsyncStorage.getItem('userToken', token);
      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {data} = await axios.get(`/users/currentUser`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export default {userLogin, getUserDetails}