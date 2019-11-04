import { connect } from 'react-redux';

import ExerciseScreen from './ExercisesScreen';
import { createNewKey } from '../../services/utils';
import { addExercise, deleteExercise } from '../../actions/exercises';
import { addExerciseKey, deleteExerciseKey } from '../../actions/trainings';
import { toggleEditMode } from '../../actions/editMode';
import { addSet, deleteSet } from '../../actions/sets';

const mapStateToProps = state => ({
    exercises: (state.selectedTraining.exercises || []).map(key => state.exercises[key]),
    isEditMode: state.isEditMode
});

const mapDispatchToProps = dispatch => ({
    addExercise: () => {
        const newExerciseKey = createNewKey();
        dispatch(addExercise(newExerciseKey, state.selectedTraining.id));
        dispatch(addExerciseKey(newExerciseKey, state.selectedTraining.id));
        dispatch(toggleEditMode(true));
    },
    deleteExercise: (id) => {
        dispatch(deleteExercise(id, state.selectedTraining.id));
        dispatch(deleteExerciseKey(id, state.selectedTraining.id));
    },
    addSet: (exerciseId) => {
        dispatch(addSet(exerciseId))
    },
    deleteSet: (exerciseId, setIndex) => {
        dispatch(deleteSet(exerciseId, setIndex))
    },
    toggleEditMode: (toggledState) => {
        dispatch(toggleEditMode(toggledState));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseScreen)
