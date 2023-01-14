import React from "react";


function Iglesia({datos}){
    const image = "./"+datos.Imagen
    const [detail, setDetail] = React.useState(false)
    const detalle = <p className="detalleIglesia">Barrio {datos.Barrio}, {datos.Ciudad} {datos.Departamento} <br/> Telefono: {datos.Telefono}</p>
    
    return(
        <div className="iglesia" >
            <img src={image} alt="imagen de la iglesia"/>
            <h2>Iglesia {datos.nombre}</h2>
            <h4>Pastor {datos.pastor}</h4>
            <p>Dirección: {datos.dirección}</p>
            {detail?detalle:""}
            <p className="verMas" onClick={()=>{setDetail(!detail)}}>{detail?"ver menos":"ver más"}</p>
            </div>
    )
}
export {Iglesia}