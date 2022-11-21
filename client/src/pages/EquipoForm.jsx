import { Form, Formik } from "formik";
import { useEquipos } from "../context/EquipoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EquipoForm() {
  const { createEquipo, getEquipo, updateEquipo } = useEquipos();
  const [equipo, setEquipo] = useState({
    eq1: "",
    eq2: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEquipo = async () => {
      if (params.id) {
        const equipo = await getEquipo(params.id);
        console.log(equipo);
        setEquipo({
          eq1: equipo.eq1,
          eq2: equipo.eq2,
          description: equipo.description,
        });
      }
    };
    loadEquipo();
  }, []);

  return (
    <div>
      <Formik
        initialValues={equipo}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateEquipo(params.id, values);
          } else {
            await createEquipo(values);
          }
          navigate("/");
          setEquipo({
            eq1: "",
            eq2: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-400 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Partido" : "Crear Partido"}
            </h1>
            <label className="block mt-2 mb-2">Equipo 1</label>
            <input
              type="text"
              name="eq1"
              placeholder="Escribe el nombre del Equipo 1"
              className="px-2 py-1 rounded-md w-full"
              onChange={handleChange}
              value={values.eq1}
            />
            <label className="block mt-2 mb-2">Equipo 2</label>
            <input
              type="text"
              name="eq2"
              placeholder="Escribe el nombre del Equipo 2"
              className="px-2 py-1 rounded-md w-full"
              onChange={handleChange}
              value={values.eq2}
            />
            <label className="block mt-2 mb-2">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Escribe una descripcion"
              className="px-2 py-1 rounded-md w-full"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-green-500 px-2 py-1 mt-2 w-full rounded-md"
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EquipoForm;
