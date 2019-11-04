import update from 'immutability-helper';

import * as actionTypes from '../actions/exercises/types';

export const exercises = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_EXERCISE: {
            const newState = update(state, {
                [action.payload.id]: {
                    $set: {
                        id: action.payload.id,
                        name: 'New Exercise',
                        sets: [{}]
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
                    sets: {$push: [{}]} // TODO: replace empty object with real set
                }
            });

            return newState;
        }

        case actionTypes.DELETE_SET: {
            // TODO: handle set removing
            // const newState = update(state, {
            //     [action.payload.exerciseId]: {
            //         sets: {$splice: [{}]}
            //     }
            // });
            //
            // return newState;
            return state;
        }

        default: {
            return state;
        }
    }
};
