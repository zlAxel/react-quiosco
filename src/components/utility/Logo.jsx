
import Logotipo from "/img/logo.svg" 

export const Logo = ({ size }) => {
    return (
        <img src={ Logotipo } alt="Logotipo quiosco" className={ size } />
    )
}
