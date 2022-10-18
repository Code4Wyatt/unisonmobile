import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);