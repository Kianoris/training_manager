import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/Colors';

const EmptyScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>You don't have any {props.text} yet!</Text>
        </View>
    )
};


export default EmptyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontSize: 24,
        color: colors.baseTextColor
    }
});
