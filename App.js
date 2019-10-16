import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from './components/AuthLoadingScreen';
import SignInScreen from './components/SignInScreen';
import AppHomeScreen from './screens/AppHomeScreen';
import TrainingsScreen from './screens/TrainingsScreen';
import ExScreen from './screens/ExScreen';

const AppStack = createStackNavigator(
    {
        Home: AppHomeScreen,
        Trainings: TrainingsScreen,
        Exercises: ExScreen
    }
);
const AuthStack = createStackNavigator({SignIn: SignInScreen});
const App = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(App);
