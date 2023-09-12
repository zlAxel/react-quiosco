
// ! Importamos los componentes de React
import { createContext, useState } from "react";

// ! Importamos los datos
import { categories as categoriesDB } from "../data/categories";

export const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {

    // ? Creamos el estado global
    const [categories, setCategories] = useState(categoriesDB) // * Estado para las categorias
    const [currentCategory, setCurrentCategory] = useState(categories[0]) // * Estado dinamico para la categoria actual
    const [modal, setModal] = useState(false) // * Estado dinamico para el modal
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])

    const handleClickOrder = ( { category_id, image, ...product } ) => {
        

        if ( order.some( orderState => orderState.id === product.id ) ){
            const verifiedOrder = order.map( orderState => orderState.id === product.id ? product : orderState )
            setOrder( verifiedOrder )
        }else{
            setOrder([ ...order, product ])
        }

        setModal( false )
    }
    
    return (
        <QuioscoContext.Provider value={{ categories, currentCategory, setCurrentCategory, modal, setModal, product, setProduct, order, handleClickOrder }}>
            { children }
        </QuioscoContext.Provider>
    );

}
