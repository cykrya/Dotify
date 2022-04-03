function formatParameter(data) {

    
    return Object.keys(data).map(key=>(`${key}=${data[key]}`)).join('&')
    
    //uris=spotify:track:2QTDuJIGKUjR7E2Q6KupIh
    //spotify%3Atrack%3A2QTDuJIGKUjR7E2Q6KupIh
}

export default formatParameter