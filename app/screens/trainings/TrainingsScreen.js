import React from 'react';
import { View, Button, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../constants/colors';
import EmptyScreen from '../../components/emptyScreen';
import BottomActions from '../../components/bottomActions';
import TrainingCard from '../../components/trainingCard';

export default class TrainingsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Trainings',
            headerTintColor: colors.baseColor,
            headerRight: navigation.getParam('edit', false) ? (
                <Button
                    onPress={navigation.getParam('saveChanges')}
                    title="Save"
                />
            ) : null,
        };
    };

    constructor(props) {
        super(props);

        this.editedTrainings = {};
    }

    componentDidMount() {
        this.props.navigation.setParams({
            saveChanges: () => {
                this.props.saveTrainingsChanges(this.editedTrainings);
                this.props.toggleEditMode(false);
                this.editedTrainings = {};
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isEditMode !== this.props.isEditMode) {
            this.props.navigation.setParams({edit: this.props.isEditMode});
        }
    }

    handleNameChange = (data) => {
        if (data.name !== data.initialName) {
            this.editedTrainings[data.id] = data.name;
        } else if (this.editedTrainings[data.id]) {
            delete this.editedTrainings[data.id];
        }
    };

    render() {
        const isTrainingsExist = !!this.props.trainings.length;
        const content = isTrainingsExist
            ? (
                <ScrollView contentContainerStyle={styles.cardsContainer}>
                    {
                        this.props.trainings.map((data) => {
                            return (
                                <TouchableOpacity
                                    key={data.id}
                                    onPress={() => this.props.showExercises(data)}
                                >
                                    <TrainingCard
                                        name={data.name}
                                        isEdit={this.props.isEditMode}
                                        nameChanged={(name) => this.handleNameChange({
                                            name,
                                            initialName: data.name,
                                            id: data.id
                                        })}
                                        deleteTraining={() => this.props.deleteTraining(data.id)}
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
                    isEdit={this.props.isEditMode}
                    addItem={this.props.addTraining}
                    editItems={(isEdit) => this.props.toggleEditMode(isEdit)}
                />
            </View>
        );
    }
}
