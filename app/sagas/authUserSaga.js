import { AsyncStorage } from 'react-native';
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/auth/types';
import NavigationService from '../services/NavigationService';

function* authUserSaga() {
    const userData = yield AsyncStorage.getItem('userData');
    yield NavigationService.switchTo(userData ? 'App' : 'Auth');
}

export default function* root() {
    yield takeLatest(actionTypes.AUTH_USER_REQUEST, authUserSaga)
}
