import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductService } from '../../services/ProductService';
type Props = {}

const Homepage = (props: Props) => {
  useEffect(()=>{
    fetchProducts();
  },[]);

  const fetchProducts = () => {
    let service: ProductService = new ProductService();
    service.getAll().then((response:any) => console.log(response));
  };







  return (
    <div className='row'>
      <div className='col-3'>
        <ProductCard />
      </div>

    </div>
  )
}

export default Homepage

//useeffect içinde kod yazmayın dışarıda yazın.
//let service: ProductService = new ProductService(); açıklama--
// service diye bir tür tanımladım, türü : Product Service değeri new ProductService(),
//useeffect kullanarak backende gidecek her şeyi modellemeliyiz. request ve responselarımızı bu nedenle model dosyası açıp bu ilişkileri kurarız.