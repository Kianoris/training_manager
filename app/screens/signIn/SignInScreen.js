import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.email = '';
        this.password = '';
    }

    signInAsync = async () => {
        if (!this.email || !this.password) {
            return;
        }

        this.props.signInUser(this.email, this.password);
    };

    handleTextChange = (value, inputType) => {
        this[inputType] = value;
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    textContentType="emailAddress"
                    placeholder='Email'
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={value => this.handleTextChange(value, 'email')}
                />
                <TextInput
                    textContentType="password"
                    placeholder='Password'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={value => this.handleTextChange(value, 'password')}
                />
                <TouchableOpacity onPress={this.signInAsync} style={styles.signInButton}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
