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

export const getBooksbyID = async (id) => {
    let response = await axios.get(`http://127.0.0.1:8000/api/displayBookbyID/${id}`, header);
    return response;
}

export const getAllBooksincart = () => {
    let response = axios.get("http://127.0.0.1:8000/api/getAllBooksincart", header)
    return response;
}

export const addBookTocart = (cartObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addBookTocart", cartObj, header)
    return response;
}

export const increment = (cartObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/incrementQuantityInCart", cartObj, header)
    return response;
}

export const decrement = (cartObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/decrementQuantityInCart", cartObj, header)
    return response;
}

export const removeBookFromCart = (cartObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/removeBookFromCart",cartObj, header)
    return response;
}

export const addBookToWishlist = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addBookToWishlist", obj, header)
    return response;
}

export const displayBooksFromWishlists = () => {
    let response = axios.get("http://127.0.0.1:8000/api/getAllBooksFromWishlists", header)
    return response;
}

export const removeBookFromWishlists = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/removeBookFromWishlists", obj, header)
    return response;
}

export const addAddress = (addressObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addAddress", addressObj, header)
    return response;
}

export const placeOrder = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/placeOrder", obj, header)
    return response;
}



export const searchBook = (obj) => {
    console.log(obj);
    let response = axios.get('http://127.0.0.1:8000/api/searchBook', obj, header)
    return response;
}