import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/trainings/types';

function* addTraining() {
    // TODO: add training to DB
}

export default function* root() {
    yield takeEvery(actionTypes.ADD_TRAINING, addTraining)
}
