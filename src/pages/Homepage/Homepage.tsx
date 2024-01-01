import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductModel } from '../../models/response/ProductModel';
import ProductService from '../../services/ProductService';
type Props = {}

const Homepage = (props: Props) => {

  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(()=>{
    fetchProducts();
  },[]);

  const fetchProducts = () => {
    
    ProductService.getAll().then((response: any) => {
      setProducts(response.data.products);
    })
   
  };

  return (
    <div className='container mt-5'>
    <div className='row'>
      {products.map(
        product => <div key={product.id}className='col-lg-3 col-md-6 col-12 mb-5'>
        <ProductCard product={product} />
        </div>)}
    </div>
  </div>
  )
}

export default Homepage

//useeffect içinde kod yazmayın dışarıda yazın.
//let service: ProductService = new ProductService(); açıklama--
// service diye bir tür tanımladım, türü : Product Service değeri new ProductService(),
//useeffect kullanarak backende gidecek her şeyi modellemeliyiz. request ve responselarımızı bu nedenle model dosyası açtık.
//response.data.products bu veriyi tip güvenli hale getirmek için usestate kullandık.