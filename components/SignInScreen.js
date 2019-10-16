import React from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { inputStyles } from "../constants/Inputs";
import { buttonStyles } from "../constants/Buttons";
import LayoutStyles from '../constants/Layout';
import colors from "../constants/Colors";

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    signInAsync = async () => {
        if (!this.state.email || !this.state.password) {
            return;
        }

        await AsyncStorage.setItem(`userData`, JSON.stringify(this.state));
        this.props.navigation.navigate('App');
    };

    handleTextChange = (value, inputType) => {
        this.setState({[inputType]: value});
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    textContentType="emailAddress"
                    placeholder={'Email'}
                    style={inputStyles.input}
                    onChangeText={value => this.handleTextChange(value, 'email')}
                />
                <TextInput
                    textContentType="password"
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={inputStyles.input}
                    onChangeText={value => this.handleTextChange(value, 'password')}
                />
                <TouchableOpacity onPress={this.signInAsync} style={buttonStyles.button}>
                    <Text style={{color: colors.baseTextColor}}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: LayoutStyles.basePadding
    }
});

