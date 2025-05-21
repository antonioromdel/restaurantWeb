import Input_label from "./form_components/Input_label";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Form_errors from "./form_components/Form_errors";
import { useContext } from "react";
import FirebaseContext from "../../firebase/context";
import { collection, addDoc } from "firebase/firestore";
import type { Producto } from "../../types/types";
import { useNavigate } from "react-router-dom";
import Input_upload from "./form_components/Input_upload";

export default function NuevoPlato() {

  const firebase = useContext(FirebaseContext)?.firebase;

  // Redirección
  const navigate = useNavigate();

  
  // Validación y leer los datos del formulario
  const formik = useFormik(
    {
      initialValues: {
        name: '',
        price: '',
        category: '',
        image: '',
        description: '',
        exist: false
      },
      validationSchema: Yup.object({
        name: Yup.string().min(3, 'Los platos deben de tener al menos 3 caracteres.').required('El nombre es obligatorio.'),
        price: Yup.string().min(1, 'Debes agregar un precio.').required('El precio es obligatorio.'),
        image: Yup.string().required("La imagen es obligatoria"),
        category: Yup.string().required('La categoria es obligatoria'),
        description: Yup.string().min(1, 'La descripción debe de ser más larga.').required('La descripción es obligatoria'),
      }),
      onSubmit: async (datos: Producto) => {
        try{
          
          await addDoc(collection(firebase!.db, 'productos'), datos)
          navigate('/')

        } catch (error) {
          console.log(error)
          navigate("/error")
        }
      }
    }
  )

  return (
    <>
      <h1>Agregar nuevo Plato</h1>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <Input_label 
              label="Nombre"
              name="name"
              typeInput="text"
              placeHolder="Nombre nuevo Plato"
              valueForm={formik.values.name}
              changeValue={formik.handleChange}
              handBlur={formik.handleBlur}
            />

            {formik.touched.name && formik.errors.name ? (
              <Form_errors 
                errorName={formik.errors.name}
              />
            ) : null}

            <Input_label 
              label="Precio"
              name="price"
              typeInput="number"
              placeHolder="Precio nuevo plato"
              valueForm={formik.values.price}
              changeValue={formik.handleChange}
              handBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <Form_errors 
                errorName={formik.errors.price}
              />
            ) : null}
            <div className="mb-4">
              <label 
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold mb-2"
                
                >Categoría</label>
              <select 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                name="category" 
                id="category"
                onChange={formik.handleChange}
                value={formik.values.category}
                onBlur={formik.handleBlur}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="desayuno">Desayuno</option>
                    <option value="comida">Comida</option>
                    <option value="cena">Cena</option>
                    <option value="bebida">Bebida</option>
                    <option value="postre">Postre</option>
                    <option value="ensaladas">Ensaladas</option>
                </select>
            </div>
            {formik.touched.category && formik.errors.category ? (
              <Form_errors 
                errorName={formik.errors.category}
              />
            ) : null}
            <Input_upload 
              name="image"
              label="Imagen"
              valueForm={formik.values.image}
              changeValue={formik.handleChange}
              handBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <Form_errors 
                errorName={formik.errors.image}
              />
            ) : null}
            <Input_label 
              label="Descripción"
              name="description"
              typeInput="text"
              placeHolder="Descripción del nuevo plato"
              valueForm={formik.values.description}
              textArea={true}
              changeValue={formik.handleChange}
              handBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <Form_errors 
                errorName={formik.errors.description}
              />
            ) : null}
            <input 
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold cursor-pointer duration-300 text-center"
              value="Agregar nuevo plato"
            />
          </form>
        </div>
      </div>
    </>
  )
}
