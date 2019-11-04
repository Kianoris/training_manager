import * as actionsTypes from './types';

export const toggleEditMode = (toggledState) => ({
    type: actionsTypes.TOGGLE_EDIT_MODE,
    payload: {
        isEditMode: toggledState
    }
});
