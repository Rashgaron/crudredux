import React from 'react'
import useEditarProducto from './useEditarProducto'
const EditarProducto = () => {
    
    const { editarProducto, onChangeFormulario, producto } = useEditarProducto();
    
    if(!producto) return null;
    const { nombre, precio } = producto;
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">

                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={editarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="nombre" 
                                    placeholder="Nombre Producto"
                                    value={nombre}
                                    onChange={onChangeFormulario}
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
                                    onChange={onChangeFormulario}
                                    />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100"
                            >Guardar Cambios</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;