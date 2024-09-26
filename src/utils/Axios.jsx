import axios from "axios";

export const Instance = axios.create({
    baseURL:"https://intershala-api.onrender.com",
    withCredentials:true
})

