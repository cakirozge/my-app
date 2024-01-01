import axios, { AxiosResponse } from "axios";
import { GetAllProductsModel } from "../models/response/GetAllProductsModel";

import { ProductModel } from "../models/response/ProductModel";

const API_URL = "https://dummyjson.com/products";

 class ProductService {
    getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
        return axios.get<GetAllProductsModel>(API_URL) ;
    }

    getById(id:number){
        return axios.get<ProductModel>(API_URL + "/" +id);
    }
}

export default new ProductService();

//any : geriye dönüş tipi herhangi bir tip demektir.
//getAll() modellememiz gerekir.
//Url tanımlanmalı : controller gibi düşün url servis içinde aynıdır.
//export default new ProductService(); yaparsak otomatik new yapan bir instance gönderir böylece servisi sürekli new yapmak zorunda kalmayız.