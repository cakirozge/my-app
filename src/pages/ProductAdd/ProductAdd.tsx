import React from 'react'

type Props = {}

const ProductAdd = (props: Props) => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Ürün Adı</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ürün Açıklaması</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ürün Fiyatı</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ürün Stok</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        
        
        <button type="submit" className="btn btn-primary">
          Kayıt
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;

//for sildik.