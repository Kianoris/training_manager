import React from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

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
        };
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
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={value => this.handleTextChange(value, 'email')}
                />
                <TextInput
                    textContentType="password"
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={value => this.handleTextChange(value, 'password')}
                />
                <TouchableOpacity onPress={this.signInAsync} style={styles.signInButton}>
                    <Text style={{color: colors.baseTextColor, fontSize: 24}}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: LayoutStyles.basePadding
    },
    input: {
        width: '80%',
        height: 48,
        marginBottom: 8,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: colors.baseBorderColor
    }
});

