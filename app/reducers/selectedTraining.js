import * as actionTypes from '../actions/trainings/types';

export const selectedTraining = (state = null, action) => {
    if (action.type === actionTypes.SET_SELECTED_TRAINING) {
        return action.payload;
    } else {
        return state;
    }
};
