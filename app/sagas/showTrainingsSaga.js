import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/home/types';
import NavigationService from '../services/NavigationService';

function* showTrainings() {
    yield NavigationService.navigate('Trainings');
}

export default function* root() {
    yield takeLatest(actionTypes.SHOW_TRAININGS, showTrainings)
}
