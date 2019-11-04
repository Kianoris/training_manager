import { connect } from 'react-redux';

import TrainingsScreen from './TrainingsScreen';

import { addTraining, deleteTraining, saveTrainingsChanges, setSelectedTraining } from '../../actions/trainings';
import { showExercises } from '../../actions/exercises';
import { toggleEditMode } from '../../actions/editMode';
import { createNewKey } from '../../services/utils';

const mapStateToProps = state => ({
    trainings: Object.keys(state.trainings || {}).map(trainingId => state.trainings[trainingId]),
    isEditMode: state.isEditMode
});

const mapDispatchToProps = dispatch => ({
    addTraining: () => {
        dispatch(addTraining(createNewKey()));
        dispatch(toggleEditMode(true));
    },
    deleteTraining: (id) => {
        dispatch(deleteTraining(id));
    },
    saveTrainingsChanges: (...data) => {
        dispatch(saveTrainingsChanges(...data));
    },
    showExercises: (data) => {
        dispatch(toggleEditMode(false));
        dispatch(showExercises());
        dispatch(setSelectedTraining(data));
    },
    toggleEditMode: (toggledState) => {
        dispatch(toggleEditMode(toggledState));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainingsScreen)
