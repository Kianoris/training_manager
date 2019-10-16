import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ImageBackground, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../constants/Colors';

const TrainingCard = (props) => {
    const deleteButton = props.isEdit
        ? (
            <TouchableOpacity style={styles.deleteButton} onPress={props.deleteTraining}>
                <AntDesign name="close" color={colors.white} size={14}/>
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
                source={require('../assets/images/trainingCardBg.png')}
                imageStyle={styles.imageStyle}
                style={styles.imageBackground}
            >
                {trainingName}
            </ImageBackground>
        </View>
    );
};

export default TrainingCard;

const styles = StyleSheet.create({
    card: {
        width: 160,
        height: 160,
        marginBottom: 8,
        backgroundColor: colors.lightGrayBgColor,
        borderRadius: 2,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 160,
        padding: 16
    },
    imageStyle: {
        borderRadius: 2,
        resizeMode: 'cover'
    },
    deleteButton: {
        position: 'absolute',
        top: -12,
        left: -12,
        zIndex: 1,
        width: 24,
        height: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dangerColor,
        borderRadius: 100
    },
    name: {
        color: colors.white,
        fontSize: 24,
        textAlign: 'center'
    },
    nameInput: {
        color: colors.white,
        fontSize: 24
    }
});
