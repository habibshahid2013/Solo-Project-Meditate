import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";



function* addHost(action){
    try {

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.post('/api/host', action.payload);
        console.log('testing host data', response.data);
        

        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'FETCH_HOST'});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* fetchHostInfo(action){

    try {
        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.get('/api/host');
        console.log('testing host data', response.data);


        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_HOST', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}
function* deleteHostInfo(action) {
    try {

        yield Promise.all( action.payload.map((id) => {
             axios.delete(`/api/host/remove-session/${id}`)
        }))
        

        yield put({
            type: 'FETCH_HOST'
        })
    } catch (error) {

    }
}


export function* watchHostASession(){
    yield takeEvery('ADD_HOST', addHost)
    yield takeEvery('FETCH_HOST', fetchHostInfo)
    yield takeEvery('DELETE_SESSION', deleteHostInfo)
}