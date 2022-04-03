function formatParameter2(data) {
    return Object.keys(data).map(key=>(`${key}=${data[key]}`)).replace(":","%3A")
}

export default formatParameter2