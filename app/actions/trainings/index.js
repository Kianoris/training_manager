import * as actionsTypes from './types';

export const addTraining = (id) => ({
    type: actionsTypes.ADD_TRAINING,
    payload: {
        id
    }
});

export const deleteTraining = (id) => ({
    type: actionsTypes.DELETE_TRAINING,
    payload: {
        id
    }
});

export const saveTrainingsChanges = (data) => ({
    type: actionsTypes.CHANGE_TRAININGS,
    payload: data
});

export const setSelectedTraining = (training) => ({
    type: actionsTypes.SET_SELECTED_TRAINING,
    payload: training
});

export const addExerciseKey = (exerciseId, trainingId) => ({
    type: actionsTypes.ADD_EXERCISE_KEY,
    payload: {
        exerciseId,
        trainingId
    }
});

export const deleteExerciseKey = (exerciseId, trainingId) => ({
    type: actionsTypes.DELETE_EXERCISE_KEY,
    payload: {
        exerciseId,
        trainingId
    }
});
