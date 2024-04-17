import React, {useState} from "react"

export const MiContexto = React.createContext({})

export default function ContextoProvider({children}){
    const [saludo, setSaludo] = useState('Estoy saludando con context...')

    return(
        <MiContexto.Provider value={{saludo, setSaludo}}>
            {children}
        </MiContexto.Provider>
    )
}