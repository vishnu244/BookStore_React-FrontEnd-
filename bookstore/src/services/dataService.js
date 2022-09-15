import axios from "axios";

let header = {
    headers:{
        Authorization :'Bearer'+ " " + localStorage.getItem('token')
    }
}

export const getBooks = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/displayBooks", header);
    return response;
}