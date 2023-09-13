
import { formatPrice } from "../helpers"
import { useQuiosco } from "../hooks/useQuiosco"
import { SummaryProduct } from "./SummaryProduct"

export const Summary = () => {

    const { order, total } = useQuiosco()

    const verifyOrder = () => order.length === 0;

    return (
        <aside className="md:w-72 h-screen overflow-y-scroll p-5 border-t-[14px] border-amber-400 shadow-xl">
            <h1 className="text-4xl font-black text-center">
                Mi pedido
            </h1>
            <p className="text-lg my-5 text-center">
                Aquí podrás ver el resumen y totales de tu pedido
            </p>
            <div className="py-10">
                {
                    order.length > 0 ? (
                        order.map( (product, index) => (
                            <SummaryProduct key={ index } product={ product } />
                        ))
                    ) : (
                        <p className="font-bold my-5 text-center">
                            Aún no has agregado nada a tu pedido
                        </p>
                    )
                }
            </div>
            <div className="flex justify-between items-center px-2">
                <p className="text-lg font-bold">
                    Total
                </p>
                <p className="text-lg font-bold">
                    { formatPrice( total ) }
                </p>
            </div>
            <form className="w-full mt-5">
                <button 
                    type="submit" 
                    disabled={ verifyOrder() } 
                    className={`bg-amber-500 ${ verifyOrder() ? 'bg-slate-400' : 'hover:bg-amber-600' } transition-colors w-full text-white font-bold py-2 px-4 rounded`}>
                    Confirmar pedido
                </button>
            </form>
        </aside>
    )
}
