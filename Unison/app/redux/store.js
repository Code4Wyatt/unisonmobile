import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './authSlice';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk"
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
}

let reducers = combineReducers({user: userReducer})
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
 })

