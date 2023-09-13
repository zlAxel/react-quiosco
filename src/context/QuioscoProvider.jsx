
// ! Importamos los componentes de React
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// ! Importamos los datos
import { categories as categoriesDB } from "../data/categories";

export const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {

    // ? Creamos el estado global
    const [categories, setCategories] = useState(categoriesDB) // * Estado para las categorias
    const [currentCategory, setCurrentCategory] = useState(categories[0]) // * Estado dinamico para la categoria actual
    const [modal, setModal] = useState(false) // * Estado dinamico para el modal
    const [product, setProduct] = useState({}) // * Estado dinamico para el producto
    const [order, setOrder] = useState([]) // * Estado para almacenar todas las ordenes
    const [total, setTotal] = useState(0) // * Estado dinamico para el total de la orden

    useEffect(() => {
        const newTotal = order.reduce(( total, orderState ) => ( orderState.price * orderState.amount ) + total, 0 )
        setTotal( newTotal )
    }, [order])

    // ? Creamos función para manejar el evento click en el boton de ordenar
    const handleClickOrder = ( { category_id, ...product } ) => {
        if ( order.some( orderState => orderState.id === product.id ) ){
            const verifiedOrder = order.map( orderState => orderState.id === product.id ? product : orderState )
            setOrder( verifiedOrder )
            toast.success(`Pedido actualizado`)
        }else{
            setOrder([ ...order, product ]);
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
            categories, currentCategory, setCurrentCategory, modal, setModal, product, 
            setProduct, order, handleClickOrder, handleEditarCantidad, handleDeleteCheckoutProduct,
            total
        }}>
            { children }
        </QuioscoContext.Provider>
    );

}
