
import { useQuiosco } from "../hooks/useQuiosco";
import { useState } from "react";

import { formatPrice } from "../helpers";

export const ModalProduct = () => {

    const { modal, setModal, product, setProduct } = useQuiosco(); // * Extraemos el estado global

    const { name, price, image } = product; // * Destructuring del producto

    const [amount, setAmount] = useState(1)

    // ? Si no hay producto, no se muestra el modal
    if ( Object.keys(product).length == 0 ) 
        return null; 

    return (
        <section className="md:flex gap-10">
            <div className="md:w-1/3">
                <img src={`/img/${ image }.jpg`} alt={ name } className="w-full select-none" />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button type="button" onClick={ () => { setModal( ! modal ); setProduct({}); }} className="text-gray-800 hover:text-red-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button> {/* // TODO | Cerrar | */}
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <h1 className="text-2xl font-bold">{ name }</h1> {/* // TODO | Cafe italiano | */}
                    <p className="text-gray-800 text-lg font-semibold">{ formatPrice(price) }</p> {/* // TODO | $ 1.000 | */}

                    <div className="flex gap-3 mt-5">
                        <button type="button" onClick={ () => { if( amount <= 1 ) return; setAmount( amount - 1 ) } } className="text-amber-500 hover:text-amber-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button> {/* // TODO | Restar | */}
                        <p className="text-lg">
                            { amount } {/* // TODO | 1 | */}
                        </p>
                        <button type="button" onClick={ () => { if( amount >= 5 ) return; setAmount( amount + 1 ) } } className="text-amber-500 hover:text-amber-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button> {/* // TODO | Sumar | */}
                    </div>
                    
                    <button type="button" className="bg-amber-500 hover:bg-amber-600 transition-colors w-1/2 text-white font-bold py-2 px-4 rounded">
                        Agregar al carrito
                    </button>
                </div>
            </div>
            {/* <button type="button" onClick={ () => { setModal( ! modal ); setProduct({}); } }>Cerrar</button> */}
        </section>
        
    )
}
