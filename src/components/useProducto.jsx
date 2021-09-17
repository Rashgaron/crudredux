import { eliminarProductoAction, obtenerProductoEditar } from '../actions/productoActions' 
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
function useProducto(){

    const dispatch = useDispatch();
    const history = useHistory();

    //funcion que redirige de forma programada
    const redireccionarEdicion = producto =>{
        dispatch( obtenerProductoEditar(producto) );
        history.push(`/productos/editar/${producto.id}`)
        
    }

    const eliminarProducto = id =>{
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
        });
    }


    return{
        redireccionarEdicion,
        eliminarProducto
    }
}

export default useProducto;