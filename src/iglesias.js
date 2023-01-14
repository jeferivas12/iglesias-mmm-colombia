import React from "react";
import { Iglesia } from "./Iglesia";

function Iglesias({datosCiudad}){
    return(
        <div className="Iglesias">
           {datosCiudad.map(dato => { 
            return <Iglesia key={dato.nombre} datos={dato}/>
            })}
        </div>
    )
}

export {Iglesias}