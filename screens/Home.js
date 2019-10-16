import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.savedTrainings}
                    onPress={() => this.props.navigation.navigate('SavedTrainings')}
                >
                    <Text style={{color: colors.buttonTextColor, fontSize: 20, textTransform: 'uppercase'}}>Select Saved Training</Text>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => this.props.navigation.navigate('CreateTraining')}
                    >
                        <Ionicons name="md-add" size={60} color="#ffffff"/>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    savedTrainings: {
        justifyContent: 'center',
        height: 150,
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: '#00bcd4',
        fontSize: 20
    },
    addButton: {
        position: 'absolute',
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#ff3366',
        borderRadius: 100,
    }
});
