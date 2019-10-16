import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import colors from '../constants/Colors';

export default class AppHomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.trainingsButton}
                    onPress={() => this.props.navigation.navigate('Trainings')}
                >
                    <Text style={styles.trainingsButtonText}>Trainings</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    trainingsButton: {
        justifyContent: 'center',
        height: 150,
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: '#00bcd4',
        fontSize: 20
    },
    trainingsButtonText: {
        color: colors.buttonTextColor,
        fontSize: 20,
        textTransform: 'uppercase'
    }
});
