import update from 'immutability-helper';

import * as actionTypes from '../actions/trainings/types';

const initialState ={
    exercises: []
};

export const trainings = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRAINING: {
            const newState = update(state, {
                [action.payload.id]: {
                    $set: {
                        id: action.payload.id,
                        name: 'New Training'
                    }
                }
            });

            return newState;
        }

        case actionTypes.DELETE_TRAINING: {
            const newState = update(state, {
                $unset: [action.payload.id]
            });

            return newState;
        }

        case actionTypes.CHANGE_TRAININGS: {
            const keys = Object.keys(action.payload);
            let newState = state;

            keys.forEach(key => {
                newState = update(newState, {
                    [key]: {
                        $merge: {name: action.payload[key]}
                    }
                });
            });

            return newState;
        }

        case actionTypes.ADD_EXERCISE_KEY: {
            const newState = update(state, {
                [action.payload.trainingId]: {
                    exercises: {$push: [action.payload.exerciseId]}
                }
            });

            return newState;
        }

        case actionTypes.DELETE_EXERCISE_KEY: {
            // TODO: delete key from array
            return state;
        }

        default: {
            return state;
        }
    }
};
