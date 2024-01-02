import React from 'react'
import { ProductModel } from '../../models/response/ProductModel';
import { Link } from 'react-router-dom';
import ProductService from '../../services/productService';
import { HttpStatusCode } from 'axios';

type Props = {
  product:ProductModel;
  onDelete: (id: number) => void //any
  title?:string; //opsiyonel
}

const ProductCard = (props: Props) => {
  //delete metodu için async gidiyoruz. then bloğuyla değil.
  

  //Silinen veri burada siliniyor ama Homepage bu işlemi göremioruz. Bu nedenle Homepage için bir caalBack fonksiyonu yazmalıyız.
  const deleteProduct = async () => {
    //gelen cevabı await ile bir değişkene atıyorum.
    // try{
    //   let response = await ProductService.delete(props.product.id);
    //   if(response.status == HttpStatusCode.Ok)
    //   {
    //     props.onDelete(props.product.id);
    //     alert("Veri başarıyla silindi.");
    //   }
    //   } catch(e)
    //   {
    //     alert("Veri silinemedi.");
    //   }

    let response = await ProductService.delete(props.product.id);
    if(response.status == HttpStatusCode.Ok)
    {
      props.onDelete(props.product.id);
      alert("Veri başarıyla silindi.");

    }
  }



  return (
    <div className="card" >
    <img src={props.product.thumbnail} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text"> {props.product.description} </p>
      <p>{props.product.price} tl</p>
      <Link to={"/product-detail/" + props.product.id} className='btn btn-primary'  >Details</Link>
      <button onClick={() => {deleteProduct()}} className='btn btn-danger'>Sil</button>
    </div>
  </div>
    
  )
}

export default ProductCard


//product?: ? işareti ile opsiyonel hale getirdik.