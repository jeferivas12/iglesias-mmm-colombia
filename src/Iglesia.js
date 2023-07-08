import React from "react";


function Iglesia({datos, setIgle, setDetail, detail}){
    const image = "./"+datos.Imagen
    const detalle = <p className="detalleIglesia">Barrio {datos.Barrio}, {datos.Ciudad} {datos.Departamento} <br/> Telefono: {datos.Telefono}</p>
    
    const prueba = 
        <div className="iglesia" >
            <img src={image} alt="imagen de la iglesia"/>
            <h2>Iglesia {datos.nombre}</h2>
            <h4>Pastor {datos.pastor}</h4>
            <h4>Zona {datos.Zona||""}</h4>
            <p>Dirección: {datos.dirección}</p>
            {detalle}
        </div>
    return(
        <div className="iglesia" >
            <img src={image} alt="imagen de la iglesia"/>
            <h2>Iglesia {datos.nombre}</h2>
            <h4>Pastor {datos.pastor}</h4>
            <p>Dirección: {datos.direccion}</p>
            {/*detail?detalle:""*/}
            <p className={detail?"cerrarButton":"verMas"} onClick={()=>{
                setDetail(!detail)
                setIgle(prueba)            
            }}
                
                >{detail?"X":"ver más"
                
                }</p>
            </div>
    )
}
export {Iglesia}