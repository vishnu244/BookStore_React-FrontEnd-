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

export const displayAllBooksInCart = () => {
    let response = axios.get("http://127.0.0.1:8000/api/displayAllBooksInCart", header)
    return response;
}

export const addBookTocart = (cartObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addBookTocart", cartObj, header)
    return response;
}

export const updateQuantityInCart = (cartQtyObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/updateQuantityInCart", cartQtyObj, header)
    return response;
}

export const removeBookFromCart = (cartQtyObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/removeBookFromCart", cartQtyObj, header)
    return response;
}

export const addBookToWishlist = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addBookToWishlist", obj, header)
    return response;
}

export const displayBooksFromWishlists = () => {
    let response = axios.get("http://127.0.0.1:8000/api/displayBooksFromWishlists", header)
    return response;
}

export const removeBookFromWishlists = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/removeBookFromWishlists", obj, header)
    return response;
}

export const addAddress = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addAddress", obj, header)
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