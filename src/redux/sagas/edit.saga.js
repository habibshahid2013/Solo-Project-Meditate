import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";


function* addEdits(action) {
    try {

        console.log('testing action.payload', action.payload);
        
        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.put(`/api/host/edits/${action.payload.id}`, action.payload);
        console.log('testing host data', response.data);


        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'FETCH_HOST' });
    } catch (error) {
        console.log('User get request failed', error);
    }
}



export function* watchEditASession() {
    yield takeEvery('EDIT', addEdits)
}