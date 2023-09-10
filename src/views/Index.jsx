
import { Product } from "../components/Product";
import { products } from "../data/products"

import useQuiosco from "../hooks/useQuiosco";

export const Index = () => {

    const { hola } = useQuiosco();
    console.log( hola );

    return (
        <>
            <h1 className="text-4xl font-black mt-10">
                Inicio
            </h1>
            <p className="text-xl">
                Elige y personaliza tu pedido a continuación
            </p>

            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
                {
                    products.map( product => (
                        <Product key={ product.id } product={ product } />
                    ))
                }
            </section>
        </>
    )
}
