import * as actionTypes from '../actions/editMode/types';

export const isEditMode = (state = false, action) => {
    if (action.type === actionTypes.TOGGLE_EDIT_MODE) {
        return action.payload.isEditMode;
    } else {
        return state;
    }
};
