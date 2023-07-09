import React from "react";

function FiltroCiudades(props){
    
    const actualizaDepartamento = (event)=>{
             
        props.setDatosCiudad(event.target.value === "Departamento" ?props.iglesias:props.iglesias.filter(dato => dato.Departamento === event.target.value))
        props.setDepartamento(event.target.value)
    }

    const actualizaCiudad = (e) =>{
        props.setCiudad(e.target.value)        
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
                <option value="Ciudad" defaultValue>ciudad</option>
                { props.iglesias.map(element => {
                    if (!ciudades.includes(element.Ciudad) & element.Departamento === props.departamento){
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