import axios from 'axios';

const getPerikpenByDate = async (date) => {
    const url = `http://localhost:8000/api/perikopens?schedule.date=${date}`
    const requestConfig = {
        headers: {
            'Accept': 'application/json',
        },
    }
    const res = axios.get(url, requestConfig)
    // return url;
    return res
}


export const GetPerikopenByDate = getPerikpenByDate