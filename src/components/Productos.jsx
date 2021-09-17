import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { descargarProductosAction } from '../actions/productoActions'
import Producto from './Producto';
const Productos = () => {

    
    const dispatch = useDispatch();

    useEffect(()=>{
        cargarProductos();
    },[]);

    const cargarProductos = () => dispatch(descargarProductosAction());

    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error)
    const cargando = useSelector(state => state.productos.loading);

    return(
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>
            {error
            ?
            <p className="font-weight-bold alert alert-danger text-center">
                Hubo un error
            </p>
            :null}
            {cargando
            ?
            <p>Cargando ...</p>
            :null}

            <table className="table table-stripe">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.lenth === 0 
                        ? 'No hay productos'
                        :
                        productos.map(producto =>
                            
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                            
                        )
                    }
                </tbody>
            </table>
        </>

    )
}
 
export default Productos;