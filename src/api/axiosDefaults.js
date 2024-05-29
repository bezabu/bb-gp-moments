import axios from "axios";

axios.defaults.baseURL = "https://bezabu-drf-api-f2959062e96d.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;


export const axiosReq = axios.create();
export const axiosRes = axios.create();

