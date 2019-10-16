import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {

    componentDidMount() {
        this.bootstrapAsync();
    }

    bootstrapAsync = async () => {
        const userData = await AsyncStorage.getItem('userData');

        this.props.navigation.navigate(userData ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
