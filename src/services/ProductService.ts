import axios, { AxiosResponse } from "axios";
import { GetAllProductsModel } from "../models/response/GetAllProductsModel";
import { promises } from "dns";

const API_URL = "https://dummyjson.com/products";

export class ProductService {
    getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
        return axios.get<GetAllProductsModel>(API_URL) ;
    }
}

//any : geriye dönüş tipi herhangi bir tip demektir.
//getAll() modellememiz gerekir.
//Url tanımlanmalı : controller gibi düşün url servis içinde aynıdır.