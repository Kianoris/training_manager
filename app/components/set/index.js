import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

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
                data.map((col, i) => {
                    return (
                        <View key={i} style={styles.column}>
                            {
                                props.isEdit
                                    ? <TextInput
                                        style={styles.inputValue}
                                        keyboardType="numeric"
                                        defaultValue={props.setData[col.prop] || '0'}
                                        onChangeText={value => props.valueOfSetChanged({
                                            ...props.setData,
                                            [col.prop]: value
                                        })}
                                    />
                                    : <Text style={styles.value}>{props.setData[col.prop]}</Text>
                            }
                            <Text style={styles.description}>{col.description}</Text>
                        </View>
                    );
                })
            }
        </View>
    );
};

export default Set;
