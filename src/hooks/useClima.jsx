import { useContext } from "react";
import ClimaContex from "../context/ClimaProvider";

const useClima = () =>{
    return useContext(ClimaContex)
    
} 

export default useClima