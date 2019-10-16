import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Set from './Set';
import colors from '../constants/Colors';

const Exercise = (props) => {
    const exerciseName = props.isEdit
        ? (
            <View style={styles.exerciseHeader}>
                <TouchableOpacity style={styles.deleteButton} onPress={props.deleteExercise}>
                    <AntDesign name="close" color={colors.white} size={14}/>
                </TouchableOpacity>
                <TextInput
                    placeholder="Exercise name"
                    placeholderTextColor={colors.lightGrayTextColor}
                    defaultValue={props.name || 'New Ex'}
                    onChangeText={(name) => props.nameChanged(name)}
                />
                <TouchableOpacity onPress={props.opened}>
                    <AntDesign name={props.isOpen ? 'up' : 'down'} size={24} color={colors.baseTextColor}/>
                </TouchableOpacity>
            </View>
        )
        : (
            <TouchableOpacity style={styles.exerciseHeader} onPress={props.opened}>
                <Text style={styles.name}>{props.name || 'New Ex'}</Text>
                <AntDesign name={props.isOpen ? 'up' : 'down'} size={24} color={colors.baseTextColor}/>
            </TouchableOpacity>
        );
    const addSetButton = props.isEdit
        ? null
        : (
            <TouchableOpacity style={styles.addSetButton} onPress={props.addNewSet}>
                <Ionicons name="md-add" color={colors.baseTextColor} size={24}/>
                <Text style={styles.addSetButtonText}>Add</Text>
            </TouchableOpacity>
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
                                                sequence={i + 1}
                                                repeats={set.repeats}
                                                weight={set.weight}
                                                execute={set.execute}
                                                rest={set.rest}
                                                isEdit={props.isEdit}
                                                valueOfSetChanged={(value, property) => props.valueOfSetChanged(value, property, i)}
                                            />
                                            {
                                                props.isEdit
                                                ? (
                                                    <TouchableOpacity
                                                        style={styles.deleteSetButton}
                                                        onPress={() => props.deleteSet(i)}
                                                    >
                                                        <AntDesign name="close" color={colors.dangerColor} size={24}/>
                                                        <Text style={styles.deleteSetButtonText}>Delete</Text>
                                                    </TouchableOpacity>
                                                ) : null
                                            }
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

const styles = StyleSheet.create({
    exerciseContainer: {
        paddingBottom: 24
    },
    exerciseHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 48,
        padding: 8,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3
    },
    exerciseBody: {
        marginTop: 4,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3
    },
    name: {
        flexWrap: 'wrap',
        color: colors.baseTextColor
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
    addSetButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    addSetButtonText: {
        paddingLeft: 8,
        color: colors.baseTextColor,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Arial'
    },
    deleteSetButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 8
    },
    deleteSetButtonText: {
        paddingLeft: 8,
        color: colors.dangerColor,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Arial'
    }
});
