import Input_label from "./form_components/Input_label";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Form_errors from "./form_components/form_errors";

export default function NuevoPlato() {

  // Validación y leer los datos del formulario
  const formik = useFormik(
    {
      initialValues: {
        nombre: '',
        precio: '',
        category: '',
        image: '',
        description: ''
      },
      validationSchema: Yup.object({
        nombre: Yup.string().min(3, 'Los platos deben de tener al menos 3 caracteres.').required('El nombre es obligatorio.'),
        precio: Yup.number().min(1, 'Debes agregar un precio.').required('El precio es obligatorio.'),
        category: Yup.string().required('La categoria es obligatoria'),
        description: Yup.string().min(1, 'La descripción debe de ser más larga.').required('La descripción es obligatoria'),
      }),
      onSubmit: datos => {
        console.log(datos)
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
              name="nombre"
              typeInput="text"
              placeHolder="Nombre nuevo Plato"
              valueForm={formik.values.nombre}
              changeValue={formik.handleChange}
              handBlur={formik.handleBlur}
            />

            {formik.touched.nombre && formik.errors.nombre ? (
              <Form_errors 
                errorName={formik.errors.nombre}
              />
            ) : null}

            <Input_label 
              label="Precio"
              name="precio"
              typeInput="number"
              placeHolder="Precio nuevo plato"
              valueForm={formik.values.precio}
              changeValue={formik.handleChange}
              handBlur={formik.handleBlur}
            />
            {formik.touched.precio && formik.errors.precio ? (
              <Form_errors 
                errorName={formik.errors.precio}
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
            <Input_label 
              label="Imagen"
              name="image"
              typeInput="file"
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
