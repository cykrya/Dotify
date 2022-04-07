let initialState = {
    accessToken:''
};

function accessTokenReducer(state = initialState, action) {
    switch (action.type) {
        case "GETACCESSTOKEN":
            return {accessToken: action.payload};
        default:
            return state;
    }
}

export { accessTokenReducer };
