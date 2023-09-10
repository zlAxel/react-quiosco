
import { createContext } from "react";

export const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {

    const hola = "Productos"

    return (
        <QuioscoContext.Provider value={{ hola }}>
            { children }
        </QuioscoContext.Provider>
    );

}
