import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde el evento submit");

    /* alternativa al tareas.push(asd) */
    setTareas([...tareas, tarea]);

    /* Limpia el formulario */
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const copiaTareas = tareas.filter((tarea) => tarea !== nombreTarea);
    setTareas(copiaTareas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          {/*  <Form.Label>Ingresa tus Tareas:</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="info" className="mx-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
