/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppWrapper from './app/redux/AppWrapper';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5050/';
AppRegistry.registerComponent(appName, () => AppWrapper);
