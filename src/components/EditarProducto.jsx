import React, {useParams, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {editarProductoAction} from '../actions/productoActions'
import { useHistory } from 'react-router-dom'
const EditarProducto = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const productoEditar = useSelector((state) =>state.productos.productoeditar)

    const [producto, guardarProducto] = useState(productoEditar)

    const {nombre , precio} = producto;

    const editarProducto = ()=>{
        dispatch(editarProductoAction(producto));
        history.push('/')
    }

    const onChangeText = (e)=>{
        guardarProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">

                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form action="">
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="nombre" 
                                    placeholder="Nombre Producto"
                                    value={nombre}
                                    onChange={(e)=>onChangeText(e)}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    name="precio" 
                                    placeholder="Precio Producto"
                                    value={precio}
                                    onChange={(e)=>onChangeText(e)}
                                    />
                            </div>
                        </form>

                        <button 
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase
                            d-block w-100"
                            onClick={()=>editarProducto()}
                        >Editar</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;