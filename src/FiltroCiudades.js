import React from "react";

function FiltroCiudades(props){
    const actualizaDepartamento = (event)=>{
        props.setDepartamento(event.target.value)
        //console.log(props.departamentos)
        //console.log(props.datos)
    }
    const actualizaCiudad = (e) =>{
        props.setCiudad(e.target.value)
        if (!e.target.value === "Ciudad")
        props.setDatosCiudad(props.datos.filter(dato => dato.Ciudad === e.target.value))
    }
    const nuevaIglesia = () =>{
        props.setCrearIglesia(!props.crearIglesia)
    }
    let ciudades = []
    return (
        <React.Fragment>
            <select name="Departamento" onChange={actualizaDepartamento}>
                <option value="Departamento" defaultValue>Departamento</option>
                { props.listDep.map(element => {
                    return <option key= {element} value= {element} >{element}</option>
                })}
                
            </select>
            <select name="Ciudad" onChange = {actualizaCiudad}>
                <option value="ciudad" defaultValue>ciudad</option>
                { props.datos.map(element => {
                    if (!ciudades.includes(element.Ciudad)){
                        ciudades.push(element.Ciudad)
                        return <option key={element.Ciudad} value= {element.Ciudad} >{element.Ciudad}</option>
                    
                    } else {return""}
                })
                
                }
            </select>
            <button onClick={nuevaIglesia}>Agregar Iglesia</button>
        </React.Fragment>
    )
}

export {FiltroCiudades}