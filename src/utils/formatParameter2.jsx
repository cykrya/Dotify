function formatParameter2(data) {
    return Object.keys(data).map(key=>(`${key}=${data[key]}`)).replace(":","%3A")
}
    //uris=spotify:track:2QTDuJIGKUjR7E2Q6KupIh
    //spotify%3Atrack%3A2QTDuJIGKUjR7E2Q6KupIh
export default formatParameter2