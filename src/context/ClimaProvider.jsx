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

    const consultarClima = datos =>{
        console.log(datos)
    }

    return (
    <ClimaContex.Provider
        value={{
            busqueda,
            datosBusqueda,
            consultarClima
        }}
    >
        {children}
    </ClimaContex.Provider>
    )
}

export {ClimaProvider}

export default ClimaContex