import { Formik, Form , Field, ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";
import { passwordRule } from "../../utils/validation/customValidationRules";
import FormikInput from "../../components/FormikInput/FormikInput";

type Props = {};

//formun alanlarına tip güvenliği sağlarız.
// interface ProductForm{} -best practice

interface ProductAddForm {
  title: "";
  description: "";
  price: number;
  stok: number;
  colorId: number;
}

const ProductAdd = (props: Props) => {
  const initialValues: ProductAddForm = {
    title: "",
    description: "",
    price: 0,
    stok: 0,
    colorId:0,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
    .required("Başlık alanı zorunludur.")
    .min(2, "Başlık en az 2 karakterden oluşmalıdır..")
    .max(50, "Başlık en fazla 50 karakterden oluşmalıdır.")
    .test(
      "is-strong", 
      "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir", 
      passwordRule,
        ),
    description: Yup.string().required().min(5).max(300),
    price: Yup.number().min(0),
    stok: Yup.number().min(0).integer(),
    colorId: Yup.number().min(1), //err verebilmesi için 1 yazdım.
  });

  // Form içindeki DİV İSİM veriyoruz örn title.
  //Böylece değişken olmaktan cıkıp, bir objeye dönüşürler.
  //onSubmit = "Handler" görünce fonksiyon olduğunu anlamalıyız.
  //afee + tab ile arrow func. kısaltması elde ederim.

  //Fieldları value bağlamalıyız.
  //Field içindeki name alanına oluşturduğumuz ilgili initialValueları yazmalıyız. --backend ismine göre yap.

  //onSubmit={(value) => {console.log(value); value ve console ilişkisi direkt json olarak yazdırır.

  return (
    <div className="container mt-5">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <FormikInput name="title" label="Ürün Adı" />
          <FormikInput name="description" label="Ürün Açıklaması" />
          <FormikInput name="price" label="Ürün Fiyatı" type="number" />
          <FormikInput name="stok" label="Ürün Stok" type="number" />

          <Field as="select" className="form-select" name="colorId" >
            <option value={0} >Bir renk seçin.</option>
            <option value={1} >Kımızı</option>
            <option value={2} >Mercan</option>
            <option value={3} >Mor</option>
          </Field>
          <ErrorMessage name="colorId"></ErrorMessage>
          <button type="submit" className="btn btn-primary">
            Kaydet
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductAdd;

//for sildik.
//Komplex formları yönetmek için FORMIK Kulanacağız.
//formu formik ile sarmalladık ve form baş harfini büyüttük.
//Formik :  initialValues, onSubmitts ister bunları vermeliyiz.

//Formik içindeki form alanının Field diye kullandığımız ismi Formikin Field ile değiştirmeliyiz.
//saf elemente ulaşsın diye.
//Yup formikten bağımsız;
//validationSchema : hazır validasyon kuralları vererek obje üretiriz.
// /* as paket adı ile tüm paket import olunur.
//tekrarlanan herşeyi component haline getirmeliyiz. propslar ile alabiliyoruz.