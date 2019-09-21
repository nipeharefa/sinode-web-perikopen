import axios from 'axios';

const getPerikpenByDate = async (date) => {
    const url = `http://localhost:8000/api/perikopens?schedule.date=${date}`
    const requestConfig = {
        headers: {
            'Accept': 'application/json',
        },
    }
    
    return axios.get(url, requestConfig)
}


export const GetPerikopenByDate = getPerikpenByDate