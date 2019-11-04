import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/exercises/types';
import NavigationService from '../services/NavigationService';

function* showExercises() {
    yield NavigationService.navigate('Trainings');
}

export default function* root() {
    yield takeLatest(actionTypes.SHOW_EXERCISES, showExercises)
}
