import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text } from 'react-native';

import { showTrainings } from '../../actions/home';
import styles from './styles';

let HomeScreen = ({ dispatch }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.trainingsButton}
                onPress={() => dispatch(showTrainings())}
            >
                <Text style={styles.trainingsButtonText}>Trainings</Text>
            </TouchableOpacity>
        </View>
    );
};

HomeScreen.navigationOptions = {
    header: null
};

HomeScreen = connect()(HomeScreen);

export default HomeScreen;
