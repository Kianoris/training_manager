import { all } from 'redux-saga/effects';

import signInSaga from './signInSaga';
import authUserSaga from './authUserSaga';
import showTrainings from './showTrainingsSaga';
import showExercises from './showExercisesSaga';
import createTrainingSaga from './createTrainingSaga';

export default function* rootSaga() {
    yield all([
        signInSaga(),
        authUserSaga(),
        showTrainings(),
        createTrainingSaga(),
        showExercises()
    ])
}
