let initialState = {accessToken:''};

function accessTokenReducer(state = initialState, action) {
    switch (action.type) {
        case "GETACCESSTOKEN":
            return {...state, accessToken: action.payload};
        default:
            return state;
    }
}

export { accessTokenReducer };
