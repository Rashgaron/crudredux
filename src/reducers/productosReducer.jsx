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
} from '../types'


// cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload 
            };

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }

        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false, 
                error: action.payload
            }
        case COMENZAR_DESCARGA_PRODUCTOS:
            return{
                ...state,
                loading: true
            }
        case COMENZAR_DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                productos: action.payload
            }
        case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                loading: action.payload
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: action.payload.id,
                productos: state.productos.filter(x => x.id != action.payload.id)
            }
        case ELIMINAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }

        default:
            return state;

    }
}