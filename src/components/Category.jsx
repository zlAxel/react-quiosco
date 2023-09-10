
export const Category = ({ category }) => {

    const { id, name, icon } = category;
    
    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
            <img src={`/img/icono_${ icon }.svg`} alt={`Icono de ${ icon }`} className="w-12" />

            <span className="text-lg font-bold cursor-pointer truncate">{ name }</span>
        </div>
    )
}
