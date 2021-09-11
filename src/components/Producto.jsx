import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {eliminarProductoAction, obtenerProductoEditar} from '../actions/productoActions'
import Swal from 'sweetalert2'

const Producto = ({producto}) => {
    const {  nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    const eliminarProducto = ()=>{
        // Preguntar al usuario 

        Swal.fire({
            title:'Estas seguro?',
            text: 'No podras revertir la accion',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Si, borralo'
        }).then(res => {
            if(res.isConfirmed){
                Swal.fire(
                    'Eliminado!',
                    'Tu producto ha sido eliminado',
                    'success'
                );
                dispatch(eliminarProductoAction(id));
            }
        })

    }

    //funcion que redirige de forma programada
    const redireccionarEdicion = producto =>{
        dispatch( obtenerProductoEditar(producto) );
        history.push(`/productos/editar/${producto.id}`)
        
    }

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
                    onClick={()=>eliminarProducto()}
                >Eliminar</button>
            </td>
        </tr>

      );
}
 
export default Producto;