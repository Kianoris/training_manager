import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import configureStore from './store/configureStore';
import NavigationService from './services/NavigationService';
import SignInScreen from './screens/signIn';
import AuthLoadingScreen from './screens/authLoading';
import HomeScreen from './screens/home/HomeScreen';
import TrainingsScreen from './screens/trainings';
import ExercisesScreen from './screens/exercises';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Trainings: TrainingsScreen,
        Exercises: ExercisesScreen
    },
    {
        initialRouteName: 'Home',
    }
);
const AuthStack = createStackNavigator({SignIn: SignInScreen});
const RootStack = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

const Navigation = createAppContainer(RootStack);
const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation ref={ navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }} />
            </Provider>
        );
    }
};
