import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    COMENZAR_DESCARGA_PRODUCTOS_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO_EXITO
} from '../types'


// cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeditar: null
}

export default function (state = initialState, action) {
    switch (action.type) {


        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                loading: true
            }
        case AGREGAR_PRODUCTO_ERROR:
        case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
        case ELIMINAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }


        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
            }
        case COMENZAR_DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                productos: action.payload
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: action.payload.id,
                productos: state.productos.filter(x => x.id != action.payload.id)
            }

        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoeditar: action.payload
            }
        case EDITAR_PRODUCTO_EXITO:
            return{
                ...state,
                productos: state.productos.map(x => {
                    if(x.id === action.payload.id){
                        x.nombre = action.payload.nombre;
                        x.precio = action.payload.precio;
                    }
                    return x;
                }),
                productoeditar:null
            }
        default:
            return state;

    }
}