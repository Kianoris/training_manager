import * as React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const EmptyScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>You don't have any {props.text} yet!</Text>
        </View>
    )
};

export default EmptyScreen;
