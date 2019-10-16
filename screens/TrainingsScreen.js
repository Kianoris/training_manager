import React from 'react';
import { StyleSheet, View, Button, ScrollView, TouchableOpacity } from 'react-native';

import { getTrainings, addNewTraining, saveTrainings, deleteTraining } from '../utils';
import BottomActions from '../components/BottomActions';
import TrainingCard from '../components/TrainingCard';
import EmptyScreen from '../components/EmptyScreen';
import colors from '../constants/Colors';

export default class TrainingsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Trainings',
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
            trainings: []
        };

        this.editedTrainings = {};
    }

    async componentDidMount() {
        this.props.navigation.setParams({saveChanges: this.saveChanges});
        const trainings = await getTrainings();
        this.setState({
            trainings
        });
    }

    addTraining = async () => {
        const id = await addNewTraining();
        this.setState({
            trainings: [...this.state.trainings, {id}]
        });
        this.enableEditView(true);
    };

    deleteTraining = async (id) => {
        const trainings = await deleteTraining(id);
        this.setState({
            trainings
        });
    };

    enableEditView = (isEnable) => {
        this.setState({
            isEdit: isEnable
        });
        this.props.navigation.setParams({edit: isEnable});
    };

    handleNameChange = (data) => {
        this.editedTrainings[data.id] = data;
    };

    saveChanges = async () => {
        this.enableEditView(false);
        const trainings = await saveTrainings(this.editedTrainings);
        this.editedTrainings = {};
        this.setState({
            trainings
        });
    };

    render() {
        const isTrainingsExist = !!this.state.trainings.length;
        const content = isTrainingsExist
            ? (
                <ScrollView contentContainerStyle={styles.cardsContainer}>
                    {
                        this.state.trainings.map((data) => {
                            return (
                                <TouchableOpacity
                                    key={data.id}
                                    onPress={() => this.props.navigation.navigate('Exercises', {trainingId: data.id})}
                                >
                                    <TrainingCard
                                        name={data.name}
                                        isEdit={this.state.isEdit}
                                        nameChanged={(name) => this.handleNameChange({name, id: data.id})}
                                        deleteTraining={() => this.deleteTraining(data.id)}
                                    />
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            ) : <EmptyScreen text="trainings"/>;

        return (
            <View style={styles.container}>
                {content}
                <BottomActions
                    isEdit={this.state.isEdit}
                    addItem={this.addTraining}
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
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 24,
        paddingHorizontal: 24
    }
});
