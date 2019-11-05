import update from 'immutability-helper';

import * as actionTypes from '../actions/exercises/types';

const initialSet = {
    repeats: 0,
    weight: 0,
    execute: 0,
    rest: 0
};

export const exercises = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_EXERCISE: {
            const newState = update(state, {
                [action.payload.id]: {
                    $set: {
                        id: action.payload.id,
                        name: 'New Exercise',
                        sets: [initialSet]
                    }
                }
            });

            return newState;
        }

        case actionTypes.DELETE_EXERCISE: {
            const newState = update(state, {
                $unset: [action.payload.id]
            });

            return newState;
        }

        case actionTypes.ADD_SET: {
            const newState = update(state, {
                [action.payload.exerciseId]: {
                    sets: {$push: [initialSet]}
                }
            });

            return newState;
        }

        case actionTypes.DELETE_SET: {
            const newState = update(state, {
                [action.payload.exerciseId]: {
                    sets: {$splice: [[action.payload.setIndex, 1]]}
                }
            });

            return newState;
        }

        case actionTypes.SAVE_EXERCISE_CHANGES: {
            // TODO: figure this out
            return state;
        }

        default: {
            return state;
        }
    }
};
