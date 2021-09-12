import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = ({history}) => {
  
  //state del componente
  const [name, guardarNombre] = useState("");
  const [price, guardarPrecio] = useState(0);

  // utilizar useDispatch y useSelector para acceder al state
  const dispatch = useDispatch();

  //acceder al state del store
  const cargando = useSelector( (state) => state.productos.loading);
  const error = useSelector( (state) => state.productos.error);

  const agregarProducto = (producto) => {
    dispatch(crearNuevoProductoAction(producto));
  };

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //Validar formulario

    if (name.trim === "" || price <= 0) return;

    // si no hay errores

    // crear el nuevo producto

    agregarProducto({
      name: name,
      price: price,
    });

    //redireccionar
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={name}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={price}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando ...</p>:null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>:null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
