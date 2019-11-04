import { combineReducers } from 'redux';

import { trainings } from './trainings';
import { isEditMode } from './editMode';
import { exercises } from './exercises';
import { selectedTraining } from './selectedTraining';

export default combineReducers({
    trainings,
    isEditMode,
    exercises,
    selectedTraining
});
