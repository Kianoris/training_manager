import * as actionsTypes from './types';

export const showExercises = () => ({
    type: actionsTypes.SHOW_EXERCISES
});

export const addExercise = (id, trainingId) => ({
    type: actionsTypes.ADD_EXERCISE,
    payload: {
        id,
        trainingId
    }
});

export const deleteExercise = (id, trainingId) => ({
    type: actionsTypes.DELETE_EXERCISE,
    payload: {
        id,
        trainingId
    }
});
