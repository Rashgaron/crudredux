import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR
} from "../types";

import clienteAxios from "../config/axios";
import Swal from 'sweetalert2';


export function eliminarProductoAction(id){
  return async dispatch =>{
    dispatch(eliminarProducto(true));
    try{
      await clienteAxios.delete(`productos/${id}`); 
      dispatch(eliminarProductoExito(false, id));
    }catch(error){
      console.log(error);
      dispatch(eliminarProductoError(true));
    }
  }
}

const eliminarProducto = (estado) =>({
  type: ELIMINAR_PRODUCTO,
  payload: estado,
})

const eliminarProductoExito = (estado, id)=>({
  type: ELIMINAR_PRODUCTO_EXITO,
  payload: {estado: estado, id: id}
})

const eliminarProductoError = (estado) =>({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload:estado
})

// Descargar productos
export function descargarProductosAction(){
  return async (dispatch) => {
    dispatch(descargarProductos(true));
    try{
      const response = await clienteAxios.get("productos");
      const products = response.data;
      dispatch(descargarProductosExito(products));
    }catch(error){
      console.log(error)
      dispatch(descargarProductosError(true));

    }
  }
}

const descargarProductos = (estado) => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: estado,
});

const descargarProductosExito = (productos) =>({
  type: COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  payload: productos
})

const descargarProductosError = (error) =>({
  type: COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  payload: true
})

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto(true));

    try {
      //insertar en la API
      await clienteAxios.post("productos", producto);
      //si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto));
      //Alerta
      Swal.fire(
        'Correcto', 
        'El producto se agrego correctamente', 
        'success')
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(agregarProductoError(true));
      Swal.fire(
        'Error', 
        'Ha habido un error al guardar el producto',
        'error'
        )
    }
  };
}

const agregarProducto = (estado) => ({
  type: AGREGAR_PRODUCTO,
  payload: estado,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});
