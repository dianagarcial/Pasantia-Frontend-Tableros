import axios from "axios";

const aplicativoApi = axios.create({
    baseURL:'http://localhost:8080/'
});




export default aplicativoApi;