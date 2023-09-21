
// ! Importamos los componentes de React
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// ! Importamos los datos
import { getCategories } from "../data/categories";

export const QuioscoContext = createContext();
import axios from "axios";

export const QuioscoProvider = ({ children }) => {

    // ? Creamos el estado global
    const [categories, setCategories] = useState([]) // * Estado para las categorias
    const [currentCategory, setCurrentCategory] = useState({}) // * Estado dinamico para la categoria actual
    const [modal, setModal] = useState(false) // * Estado dinamico para el modal
    const [product, setProduct] = useState({}) // * Estado dinamico para el producto
    const [order, setOrder] = useState([]) // * Estado para almacenar todas las ordenes
    const [total, setTotal] = useState(0) // * Estado dinamico para el total de la orden
    const [errors, setErrors] = useState([]) // * Estado para los errores

    useEffect(() => {
        getCategories().then( data => {
            setCategories( data )
            setCurrentCategory( data[0] )
        })
    }, [])
    

    useEffect(() => {
        const newTotal = order.reduce(( total, orderState ) => ( orderState.price * orderState.amount ) + total, 0 )
        setTotal( newTotal )
    }, [order]);

    // ? Creamos función para manejar el evento click en el boton de ordenar
    const handleClickOrder = ( { category_id, ...product } ) => { // * Con el operador rest le decimos que category_id no lo tome en cuenta y lo elimine del objeto
        if ( order.some( orderState => orderState.id === product.id ) ){
            const verifiedOrder = order.map( orderState => orderState.id === product.id ? product : orderState )
            setOrder( verifiedOrder )
            toast.success(`Pedido actualizado`)
        }else{
            setOrder([ ...order, product ]); // * Con los 3 puntos le decimos que mantenga los productos que ya estaban en el estado y agregue el nuevo
            toast.success(`Agregaste ${ product.name } a tu orden`)
        }

        setModal( false )
    }

    // ? Creamos función para manejar el evento click en el boton de editar cantidad
    const handleEditarCantidad = id => {
        const actualOrder = order.filter( orderState => orderState.id === id )[0]
        
        setProduct( actualOrder )

        setModal( ! modal )
    }

    const handleDeleteCheckoutProduct = id => {
        const verifiedOrder = order.filter( orderState => orderState.id !== id )
        setOrder( verifiedOrder )

        toast.success(`Producto eliminado de tu orden`)
    }
    
    return (
        <QuioscoContext.Provider value={{ 
            categories, currentCategory, setCurrentCategory, 
            modal, setModal, 
            product, setProduct, order, 
            handleClickOrder, handleEditarCantidad, handleDeleteCheckoutProduct,
            total, 
            errors, setErrors
        }}>
            { children }
        </QuioscoContext.Provider>
    );

}
