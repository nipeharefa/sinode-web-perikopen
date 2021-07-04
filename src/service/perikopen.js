import axios from 'axios';

const baseURL = process.env.REACT_APP_DOMAIN || 'http://localhost:8000';

const getPerikpenByDate = async (date) => {
    const url = `${baseURL}/api/perikopens?schedule.date=${date}`
    const requestConfig = {
        headers: {
            'Accept': 'application/json',
        },
    }
    
    return axios.get(url, requestConfig)
}


export const GetPerikopenByDate = getPerikpenByDate