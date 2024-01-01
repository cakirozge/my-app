import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductService } from '../../services/ProductService';
import { ProductModel } from '../../models/response/ProductModel';
type Props = {}

const Homepage = (props: Props) => {

  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(()=>{
    fetchProducts();
  },[]);

  const fetchProducts = () => {
    let service: ProductService = new ProductService();
    service.getAll().then(response => {
      setProducts(response.data.products);
    })
   
  };

  return (
    <div className='row'>
      {products.map(product =>(
        <div className='col-3'>
        <ProductCard product={product} />
      </div>

      ))}

    </div>
  )
}

export default Homepage

//useeffect içinde kod yazmayın dışarıda yazın.
//let service: ProductService = new ProductService(); açıklama--
// service diye bir tür tanımladım, türü : Product Service değeri new ProductService(),
//useeffect kullanarak backende gidecek her şeyi modellemeliyiz. request ve responselarımızı bu nedenle model dosyası açtık.
//response.data.products bu veriyi tip güvenli hale getirmek için usestate kullandık.