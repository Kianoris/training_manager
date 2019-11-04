import { AsyncStorage } from 'react-native';
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/signIn/types';
import NavigationService from '../services/NavigationService';

function* signInSaga(action) {
    yield AsyncStorage.setItem(`userData`, JSON.stringify(action.payload));
    yield NavigationService.switchTo('App');
}

export default function* root() {
    yield takeLatest(actionTypes.SIGN_IN, signInSaga)
}
