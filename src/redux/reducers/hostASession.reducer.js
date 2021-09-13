const hostReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOST':
            return action.payload;
        case 'UNSET_HOST':
            return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.host
export default hostReducer;