import React, {useState, useEffect} from "react"

export const MiContexto = React.createContext({})

export default function ContextoProvider({children}){
    const [pokemon, setPokemon] = useState()

    const direccion = 'https://pokeapi.co/api/v2/pokemon/'

    const fetchData = async () => {
        const response = await fetch(direccion);
        const data = await response.json();
        setPokemon(data)
      };
    
      useEffect(() => {
        fetchData();
      }, []);



    return(
        <MiContexto.Provider value={{pokemon, setPokemon}}>
            {children}
        </MiContexto.Provider>
    )
}