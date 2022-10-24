import {Provider} from 'react-redux';
import {store} from './store';
import LoginScreen from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Auth from '../screens/Auth/AuthScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { View } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

let persistor = persistStore(store);

export default AppWrapper = () => {

  return (
  
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Auth" component={Auth} />
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    
  );
};
