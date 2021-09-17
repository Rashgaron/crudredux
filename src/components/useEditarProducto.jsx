import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import { editarProductoAction } from "../actions/productoActions"

function useEditarProducto(){
 
    const history = useHistory();
    const dispatch = useDispatch();

    const [producto, guardarProducto] = useState({
        nombre: "",
        precio: "",
    })

    const productoEditar = useSelector((state) =>state.productos.productoeditar)

    useEffect(()=>{
        guardarProducto(productoEditar);
    }, [productoEditar]);


    const editarProducto = (e) =>{
        e.preventDefault();
        dispatch(editarProductoAction(producto));
        history.push('/')
    }

    const onChangeFormulario = (e)=>{
        guardarProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }

    return {
        editarProducto,
        onChangeFormulario,
        producto
    }

}

export default useEditarProducto;