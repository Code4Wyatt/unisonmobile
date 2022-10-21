import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

const AppRoute = () => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute