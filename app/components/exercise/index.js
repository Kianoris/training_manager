import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';

import colors from '../../constants/colors';
import styles from './styles';
import Set from '../../components/set';

const Exercise = (props) => {
    const exerciseName = props.isEdit
        ? (
            <View style={styles.exerciseHeader}>
                <TouchableOpacity style={styles.deleteButton} onPress={props.deleteExercise}>
                    <Text>X</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Exercise name"
                    placeholderTextColor={colors.lightGrayTextColor}
                    defaultValue={props.name || 'New Ex'}
                    onChangeText={(name) => props.nameChanged(name)}
                />
                <TouchableOpacity onPress={props.opened}>
                    <Text>{props.isOpen ? 'up' : 'down'}</Text>
                </TouchableOpacity>
            </View>
        )
        : (
            <TouchableOpacity style={styles.exerciseHeader} onPress={props.opened}>
                <Text style={styles.name}>{props.name || 'New Exercise'}</Text>
                <Text>{props.isOpen ? 'up' : 'down'}</Text>
            </TouchableOpacity>
        );
    const addSetButton = props.isEdit
        ? null
        : (
            <TouchableOpacity style={styles.addSetButton} onPress={props.addNewSet}>
                <Text style={styles.addSetButtonText}>Add</Text>
            </TouchableOpacity>
        );
    const deleteSetButton = (index) => (
        props.isEdit
            ? (
                <TouchableOpacity
                    style={styles.deleteSetButton}
                    onPress={() => props.deleteSet(index)}
                >
                    <Text style={styles.deleteSetButtonText}>Delete</Text>
                </TouchableOpacity>
            ) : null
    );

    return (
        <View style={styles.exerciseContainer}>
            {exerciseName}
            {
                props.isOpen
                    ? (
                        <View style={styles.exerciseBody}>
                            {
                                props.sets.map((set, i) => {
                                    return (
                                        <View key={i}>
                                            <Set
                                                setData={{
                                                    repeats: set.repeats,
                                                    weight: set.weight,
                                                    execute: set.execute,
                                                    rest: set.rest
                                                }}
                                                sequence={i + 1}
                                                isEdit={props.isEdit}
                                                valueOfSetChanged={updatedSet => props.valueOfSetChanged(updatedSet, i)}
                                            />
                                            {deleteSetButton(i)}
                                        </View>
                                    );
                                })
                            }
                            {addSetButton}
                        </View>
                    )
                    : null
            }
        </View>
    );
};

export default Exercise;
