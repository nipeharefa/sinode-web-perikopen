

const getKJByPerikopen = (httpClient, id) => {
    const url = `api/perikopen/${id}/kj`
    return httpClient.get(url)
}

const getBZByPerikopen = (httpClient, id) => {
    const url = `api/perikopen/${id}/bz`
    return httpClient.get(url)
}

const getPerikopenReadingList = (httpClient, perikopenID) => {
    const url = `api/perikopens/${perikopenID}/reading_lists`;
    return httpClient.get(url)
}

const connectionFactory = (httpClient) => {
    return {
        getKJByPerikopen: (...params)  => getKJByPerikopen(httpClient, ...params),
        getBZByPerikopen: (id) => getBZByPerikopen(httpClient, id),
        getPerikopenReadingList: (id) => getPerikopenReadingList(httpClient, id)
    }
}


export default connectionFactory