import axios from 'axios';

const baseURL = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin"

const getSlotstatus = ({pin,date}) => {

    const promise = axios.get(baseURL,{params:{pincode:pin,date:date}})
    return promise.then(res => res.data)

}

const cowinService = {getSlotstatus}

export default cowinService;