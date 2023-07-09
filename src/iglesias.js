import React from "react";
import { Iglesia } from "./Iglesia";




function Iglesias({datosCiudad, setIgle, setDetail, detail, ciudad, setDatosCiudad, iglesias}){
    React.useEffect(()=>{
        
        setDatosCiudad(ciudad === "Ciudad" ?iglesias:iglesias.filter(dato => dato.Ciudad === ciudad))
      },[ciudad, iglesias])
    return(
        <div className="Iglesias">
           {/*!!detail && (<h1 className="cerrarButton" onClick={setDetail(true)}>X</h1>)*/}
           {datosCiudad.map(dato => { 
            return <Iglesia 
            key={dato.nombre} 
            datos={dato} 
            setIgle={setIgle}
            setDetail = {setDetail}
            detail = {detail}
            />
            })}
        </div>
    )
}

export {Iglesias}