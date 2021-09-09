import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerForm(action) {
    try {

        
        yield axios.post('/api/registerform', action.payload);


        // set to 'login' mode so they see the login screen
        // after registration or after they log out
        yield put({ type: 'SET_TO_LOGIN_MODE' });
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* registrationFormSaga() {
    yield takeLatest('ADD_INPUT', registerForm);
}

export default registrationFormSaga;
