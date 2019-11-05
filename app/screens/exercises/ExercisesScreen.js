import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import colors from '../../constants/colors';
import styles from './styles';
import BottomActions from '../../components/bottomActions';
import EmptyScreen from '../../components/emptyScreen';
import Exercise from '../../components/exercise';

export default class ExercisesScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Exercises',
            headerTintColor: colors.baseColor,
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

        this.openedExercises = {};
        this.namesToUpdate = {};
        this.setsToUpdate = {};
    }

    componentDidMount() {
        this.props.navigation.setParams({
            saveChanges: () => {
                this.props.saveExerciseChanges(this.namesToUpdate, this.setsToUpdate);
                this.props.toggleEditMode(false);
                this.namesToUpdate = {};
                this.setsToUpdate = {};
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isEditMode !== this.props.isEditMode) {
            this.props.navigation.setParams({edit: this.props.isEditMode});
        }
    }

    changeOpenedState = (id) => {
        this.openedExercises[id] = !this.openedExercises[id];
    };

    handleNameChange = (data) => {
        if (data.name !== data.initialName) {
            this.namesToUpdate[data.id] = data.name;
        } else if (this.namesToUpdate[data.id]) {
            delete this.namesToUpdate[data.id];
        }
    };

    editSet = (index, exId, updatedSet) => {
        this.setsToUpdate[`${exId}_${index}`] = updatedSet;
    };

    render() {
        const isExercisesExist = !!this.props.exercises.length;
        const content = isExercisesExist
            ? (
                <ScrollView contentContainerStyle={styles.exercisesContainer}>
                    {
                        this.props.exercises.map((data) => {
                            return (
                                <Exercise
                                    key={data.id}
                                    name={data.name}
                                    sets={data.sets}
                                    isEdit={this.props.isEditMode}
                                    isOpen={!!this.openedExercises[data.id]}
                                    opened={() => this.changeOpenedState(data.id)}
                                    deleteExercise={() => this.props.deleteExercise(data.id)}
                                    nameChanged={(name) => this.handleNameChange({
                                        name,
                                        initialName: data.name,
                                        id: data.id
                                    })}
                                    addNewSet={() => this.props.addSet(data.id)}
                                    deleteSet={(index) => this.props.deleteSet(data.id, index)}
                                    valueOfSetChanged={(updatedSet, index) => this.editSet(index, data.id, updatedSet)}
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
                    isEdit={this.props.isEditMode}
                    addItem={this.props.addExercise}
                    editItems={(isEdit) => this.props.toggleEditMode(isEdit)}
                />
            </View>
        );
    }
}
