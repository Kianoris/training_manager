import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import colors from '../constants/Colors';

const Set = (props) => {
    const data = [
        {
            prop: 'repeats',
            description: 'Reps'
        },
        {
            prop: 'weight',
            description: 'Kg'
        },
        {
            prop: 'execute',
            description: 'S (execute)'
        },
        {
            prop: 'rest',
            description: 'S (rest)'
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.sequence}>Set {props.sequence}.</Text>
            </View>
            {
                data.map((item, i) => {
                    return (
                        <View key={i} style={styles.column}>
                            {
                                props.isEdit
                                    ? <TextInput
                                        style={styles.inputValue}
                                        keyboardType="numeric"
                                        defaultValue={props[item.prop] || '0'}
                                        onChangeText={(value) => props.valueOfSetChanged(value, item.prop)}
                                      />
                                    : <Text style={styles.value}>{props[item.prop]}</Text>
                            }
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    );
                })
            }
        </View>
    );
};

export default Set;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: colors.baseBorderColor
    },
    column: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    sequence: {
        fontSize: 16,
        color: colors.grayTextColor
    },
    value: {
        color: colors.baseTextColor,
        fontSize: 24
    },
    inputValue: {
        fontSize: 24
    },
    description: {
        fontSize: 16,
        color: colors.grayTextColor
    }
});
