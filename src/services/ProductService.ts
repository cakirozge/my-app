import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export class ProductService {
    getAll(): any{
        return axios.get(API_URL) ;
    }
}

//any : geriye dönüş tipi herhangi bir tip demektir.
//getAll() modellememiz gerekir.
//Url tanımlanmalı : controller gibi düşün url servis içinde aynıdır.