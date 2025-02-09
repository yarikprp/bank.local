import axios from "axios";

const requestAxios = axios.create({
    baseURL: 'https://bank-online-24fd4-default-rtdb.firebaseio.com/'
})

export default requestAxios