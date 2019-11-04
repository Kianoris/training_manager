import * as actionsTypes from './types';

export const addSet = (id) => ({
    type: actionsTypes.ADD_SET,
    payload: {
        exerciseId: id
    }
});

export const deleteSet = (exerciseId, setIndex) => ({
    type: actionsTypes.DELETE_SET,
    payload: {
        exerciseId,
        setIndex
    }
});
