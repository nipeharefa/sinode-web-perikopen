

const getKJByPerikopen = (httpClient, id) => {
    const url = `api/perikopen/${id}/kj`
    return httpClient.get(url)
}

const getBZByPerikopen = (httpClient, id) => {
    const url = `api/perikopen/${id}/bz`
    return httpClient.get(url)
}

const connectionFactory = (httpClient) => {
    return {
        getKJByPerikopen: (...params)  => getKJByPerikopen(httpClient, ...params),
        getBZByPerikopen: (id) => getBZByPerikopen(httpClient, id),
    }
}


export default connectionFactory