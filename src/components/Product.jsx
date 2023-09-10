
import { formatPrice } from "../helpers";

export const Product = ({ product }) => {

    const { id, name, price, image } = product;

    return (
        <article className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <img src={`/img/${ image }.jpg`} alt={ name } className="w-full h-80 object-cover object-center" />

            <div className="py-5 px-8">
                <h3 className="text-lg text-slate-800 font-bold">{ name }</h3>
                <p className="mt-2 font-bold text-amber-600">{ formatPrice( price ) }</p>
            </div>
        </article>
    )
}
