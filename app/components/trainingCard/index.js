import * as React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, TextInput } from 'react-native';

import styles from './styles';
import colors from '../../constants/colors';

const TrainingCard = (props) => {
    const deleteButton = props.isEdit
        ? (
            <TouchableOpacity style={styles.deleteButton} onPress={props.deleteTraining}>
                <Text>X</Text>
            </TouchableOpacity>
        ) : null;
    const trainingName = props.isEdit
        ? (
            <TextInput
                style={styles.nameInput}
                placeholder="Training name"
                defaultValue={props.name || 'New Training'}
                multiline={true}
                textAlignVertical="top"
                placeholderTextColor={colors.lightGrayTextColor}
                onChangeText={(name) => props.nameChanged(name)}
            />
        ) : (
            <Text
                style={styles.name}
            >{props.name || 'New Training'}</Text>
        );

    return (
        <View style={styles.card}>
            {deleteButton}
            <ImageBackground
                source={require('../../assets/images/trainingCardBg.png')}
                imageStyle={styles.imageStyle}
                style={styles.imageBackground}
            >
                {trainingName}
            </ImageBackground>
        </View>
    );
};

export default TrainingCard;
