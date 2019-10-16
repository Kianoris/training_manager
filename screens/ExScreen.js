import React from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

import BottomActions from '../components/BottomActions';
import EmptyScreen from '../components/EmptyScreen';
import Exercise from '../components/Exercise';
import colors from '../constants/Colors';
import { addNewExercise, getExercises, deleteExercise, saveExercises, addNewSet, deleteSet } from '../utils';

export default class ExScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Exercises',
            headerTintColor: colors.baseTextColor,
            headerRight: navigation.getParam('edit', false) ? (
                <Button
                    onPress={navigation.getParam('saveChanges')}
                    title="Save"
                />
            ) : null,
        };
    };

    constructor() {
        super();

        this.state = {
            isEdit: false,
            exercises: [],
            openedExercises: {}
        };

        this.editedExercises = {};
    }

    async componentDidMount() {
        this.props.navigation.setParams({saveChanges: this.saveChanges});
        this.trainingId = this.props.navigation.getParam('trainingId');
        const exercises = await getExercises(this.trainingId);
        this.setState({
            exercises
        });
    }

    addExercise = async () => {
        const exercise = await addNewExercise(this.trainingId);
        this.setState({
            exercises: [...this.state.exercises, exercise]
        });
        this.enableEditView(true);
    };

    deleteExercise = async (exId) => {
        const exercises = await deleteExercise(this.trainingId, exId);
        this.setState({
            exercises
        });
    };

    enableEditView = (isEnable) => {
        this.setState({
            isEdit: isEnable
        });
        this.props.navigation.setParams({edit: isEnable});
        this.editedExercises = {};
    };

    changeOpenedState = (id) => {
        this.setState({
            openedExercises: {
                ...this.state.openedExercises,
                [id]: !this.state.openedExercises[id]
            }
        });
    };

    handleNameChange = (data) => {
        if (!this.editedExercises[data.id]) {
            this.editedExercises[data.id] = {};
        }
        this.editedExercises[data.id].name = data.name;
    };

    saveChanges = async () => {
        if (!Object.keys(this.editedExercises).length) {
            this.enableEditView(false);
            return;
        }

        const exercises = await saveExercises(this.trainingId, this.editedExercises);
        this.enableEditView(false);
        this.setState({
            exercises
        });
    };

    addNewSet = async (exId) => {
        const exercises = await addNewSet(this.trainingId, exId);
        this.setState({
            exercises
        });
    };

    deleteSet = async (exId, setIndex) => {
        const exercises = await deleteSet(this.trainingId, exId, setIndex);
        this.setState({
            exercises
        });
    };

    editSet = (value, property, setIndex, exId) => {
        if (!this.editedExercises[exId]) {
            this.editedExercises[exId] = {};
        }

        if (!this.editedExercises[exId].sets) {
            this.editedExercises[exId].sets = [...this.state.exercises.find(exercise => exercise.id === exId).sets];
        }

        this.editedExercises[exId]['sets'][setIndex] = {
            ...this.editedExercises[exId]['sets'][setIndex],
            [property]: value
        };
    };

    render() {
        const isExercisesExist = !!this.state.exercises.length;
        const content = isExercisesExist
            ? (
                <ScrollView contentContainerStyle={styles.exercisesContainer}>
                    {
                        this.state.exercises.map((data, i) => {
                            return (
                                <Exercise
                                    key={i}
                                    name={data.name}
                                    sets={data.sets}
                                    isEdit={this.state.isEdit}
                                    isOpen={this.state.openedExercises[data.id]}
                                    opened={() => this.changeOpenedState(data.id)}
                                    deleteExercise={() => this.deleteExercise(data.id)}
                                    nameChanged={(name) => this.handleNameChange({name: name.trim(), id: data.id})}
                                    addNewSet={() => this.addNewSet(data.id)}
                                    deleteSet={(index) => this.deleteSet(data.id, index)}
                                    valueOfSetChanged={(value, property, setIndex) => this.editSet(value, property, setIndex, data.id)}
                                />
                            );
                        })
                    }
                </ScrollView>
            ) : <EmptyScreen text="exercises"/>;

        return (
            <View style={styles.container}>
                {content}
                <BottomActions
                    isEdit={this.state.isEdit}
                    addItem={this.addExercise}
                    editItems={(isEdit) => this.enableEditView(isEdit)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    exercisesContainer: {
        padding: 24
    }
});
