import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductModel } from '../../models/response/ProductModel';
import ProductService from '../../services/productService';

type Props = {}

const ProductDetail = (props: Props) => {
    // const location = useLocation(); ---query string
    const params = useParams<{id:string}>();    //location alınan değer string olur -number değil
    const  [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
      // if içinde değişken ismi kullanmak o değişken varsa demektir bu nedenle değişken içinde kullanılır.
      if(params.id){
        ProductService.getById(parseInt(params.id)).then(response => {
          setProduct(response.data) //response data kısmını set product yaparak eşitliyoruz.
        }); //parseInt : params.id Int cevirdi.
      }
        
    }, [] );


  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail;