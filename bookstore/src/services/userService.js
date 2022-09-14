import axios from "axios";

export const signUp = async (signupObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/registration", signupObj);
    return response;
}

export const login = async (loginObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/login", loginObj);
    return response;
}

