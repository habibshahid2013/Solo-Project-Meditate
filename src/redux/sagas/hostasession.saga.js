import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";



function* fetchHost(action){
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.post('/api/host', action.payload, config);

        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_HOST', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}





export function* watchHostASession(){
    yield takeEvery('ADD_HOST', fetchHost)
}