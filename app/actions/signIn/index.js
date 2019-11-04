import * as actionsTypes from './types';

export const signInUser = (userData) => ({
    type: actionsTypes.SIGN_IN,
    payload: userData
});
