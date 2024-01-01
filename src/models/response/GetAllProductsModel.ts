import { ProductModel } from "./ProductModel";
export interface GetAllProductsModel {
    total:number;
    skip:number;
    limit:number;
    products:ProductModel[];

}

//modelleri her zaman -İNTERFACE- olarak oluşturmalıyız.