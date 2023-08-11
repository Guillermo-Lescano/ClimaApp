import { useState, createContext } from "react";

const ClimaContex = createContext()

const ClimaProvider = ({children}) => {
    const [busqueda, setBusqueda] = useState({
        ciudad:'',
        pais:''
    })

    const datosBusqueda = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
    <ClimaContex.Provider
        value={{
            busqueda,
            datosBusqueda
        }}
    >
        {children}
    </ClimaContex.Provider>
    )
}

export {ClimaProvider}

export default ClimaContex