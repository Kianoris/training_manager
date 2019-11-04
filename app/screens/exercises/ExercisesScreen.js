import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import colors from '../../constants/colors';
import styles from './styles';
import BottomActions from '../../components/bottomActions';
import EmptyScreen from '../../components/emptyScreen';
// import Exercise from '../components/Exercise';

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

        // this.state = {
        //     openedExercises: {}
        // };
        //
        // this.editedExercises = {};
    }

    componentDidMount() {
        // this.props.navigation.setParams({saveChanges: this.saveChanges});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isEditMode !== this.props.isEditMode) {
            this.props.navigation.setParams({edit: this.props.isEditMode});
        }
    }

    // changeOpenedState = (id) => {
    //     this.setState({
    //         openedExercises: {
    //             ...this.state.openedExercises,
    //             [id]: !this.state.openedExercises[id]
    //         }
    //     });
    // };

    // handleNameChange = (data) => {
    //     if (!this.editedExercises[data.id]) {
    //         this.editedExercises[data.id] = {};
    //     }
    //     this.editedExercises[data.id].name = data.name;
    // };

    // saveChanges = async () => {
    //     if (!Object.keys(this.editedExercises).length) {
    //         this.enableEditView(false);
    //         return;
    //     }
    //
    //     const exercises = await saveExercises(this.trainingId, this.editedExercises);
    //     this.enableEditView(false);
    //     this.setState({
    //         exercises
    //     });
    // };

    // editSet = (value, property, setIndex, exId) => {
    //     if (!this.editedExercises[exId]) {
    //         this.editedExercises[exId] = {};
    //     }
    //
    //     if (!this.editedExercises[exId].sets) {
    //         this.editedExercises[exId].sets = [...this.state.exercises.find(exercise => exercise.id === exId).sets];
    //     }
    //
    //     this.editedExercises[exId]['sets'][setIndex] = {
    //         ...this.editedExercises[exId]['sets'][setIndex],
    //         [property]: value
    //     };
    // };

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
                                    isOpen={this.state.openedExercises[data.id]}
                                    opened={() => this.changeOpenedState(data.id)}
                                    deleteExercise={() => this.props.deleteExercise(data.id)}
                                    nameChanged={(name) => this.handleNameChange({name: name.trim(), id: data.id})}
                                    addNewSet={() => this.props.addSet(data.id)}
                                    deleteSet={(index) => this.props.deleteSet(data.id, index)}
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
                    isEdit={this.props.isEditMode}
                    addItem={this.props.addExercise}
                    editItems={(isEdit) => this.props.toggleEditMode(isEdit)}
                />
            </View>
        );
    }
}
