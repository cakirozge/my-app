import { Formik, Form, Field} from 'formik';
import React from 'react'

type Props = {}

//formun alanlarına tip güvenliği sağlarız.
// interface ProductForm{} -best practice

interface ProductAddForm{
  title:"",
  description:"",
  price:0,
  stok:0,

}

const ProductAdd = (props: Props) => {

  const initialValues: ProductAddForm = {
    title:"",
    description:"",
    price:0,
    stok:0,
  }

// Form içindeki DİV İSİM veriyoruz örn title.
//Böylece değişken olmaktan cıkıp, bir objeye dönüşürler.
//onSubmit = "Handler" görünce fonksiyon olduğunu anlamalıyız.
//afee + tab ile arrow func. kısaltması elde ederim.

//Fieldları value bağlamalıyız.
//Field içindeki name alanına oluşturduğumuz ilgili initialValueları yazmalıyız. --backend ismine göre yap.

//onSubmit={(value) => {console.log(value); value ve console ilişkisi direkt json olarak yazdırır.

  return (
    <div className="container mt-5">
      <Formik initialValues={initialValues} onSubmit={(value) => {console.log(value);}}> 
      <Form>
        <div className="mb-3">
          <label className="form-label">Ürün Adı</label>
          <Field
           name ="title" type="text" className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ürün Açıklaması</label>
          <Field
          name ="description" type="text" className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ürün Fiyatı</label>
          <Field
            name ="price" type="number" className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ürün Stok</label>
          <Field
           name ="stok" type="number" className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Kayıt
        </button>
      </Form>
      </Formik>
    </div>
  );
}

export default ProductAdd;

//for sildik.
//Komplex formları yönetmek için FORMIK Kulanacağız.
//formu formik ile sarmalladık ve form baş harfini büyüttük.
//Formik :  initialValues, onSubmitts ister bunları vermeliyiz.

//Formik içindeki form alanının Field diye kullandığımız ismi Formikin Field ile değiştirmeliyiz.
//saf elemente ulaşsın diye.