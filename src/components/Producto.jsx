import React from 'react'

import useProducto from './useProducto';
const Producto = ({producto}) => {

    const { nombre, precio, id } = producto;

    const { redireccionarEdicion, eliminarProducto } = useProducto();    

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button 
                    onClick={()=>redireccionarEdicion(producto)}
                    className="btn btn-primary mr-1">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>eliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
      );
}
 
export default Producto;