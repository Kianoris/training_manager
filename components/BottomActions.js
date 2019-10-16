import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import colors from '../constants/Colors';

const BottomActions = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.addItem}>
                <Ionicons name="md-add" color={colors.baseTextColor} size={24}/>
                <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
            {
                props.isEdit
                    ? (
                        <TouchableOpacity style={styles.button} onPress={() => props.editItems(false)}>
                            <MaterialIcons name="cancel" color={colors.baseTextColor} size={24}/>
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    )
                    : (
                        <TouchableOpacity style={styles.button} onPress={() => props.editItems(true)}>
                            <MaterialIcons name="edit" color={colors.baseTextColor} size={24}/>
                            <Text style={styles.text}>Edit</Text>
                        </TouchableOpacity>
                    )
            }
        </View>
    );
};

export default BottomActions;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth: 1,
        borderColor: colors.baseBorderColor
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    text: {
        paddingLeft: 8,
        color: colors.baseTextColor,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Arial'
    }
});
