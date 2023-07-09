import React, {useState, useEffect} from "react";
import {SetIglesia} from "./firebase"

const departamentos = []

function Agregar(props) {

    const [nombre, setNombre] = useState("")
    const [Barrio, setBarrio] = useState("")
    const [Direccion, setDireccion] = useState("")
    const [Pastor, setPastor] = useState("")
    const [Ciudad, setCiudad] = useState("")
    const [Departamento, setDepartamento] = useState("")
    const [Telefono, setTelefono] = useState("")
    const [Zona, setZona] = useState("")
    let datos = {}
    const [data, setData] = useState(["null"]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json');
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            datos = jsonData
            
            datos.map(dep=>{
            if (!departamentos.includes(dep.departamento)) 
                    {departamentos.push(dep.departamento)}
            })
           
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        };

    useEffect(() => {        
        
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.crearIglesia(false)
        SetIglesia(nombre, Pastor, Barrio, Ciudad, Departamento, Direccion, Telefono, Zona)        
        setNombre("")
    }
    const cancel = () => {
        props.crearIglesia(false)
    }

    return( 
        <div className="agregar">
            <h3>Agregar una nueva iglesia</h3>
            <form className="agregar-form">
                <div><label for="departamento">Departamento:</label>
                <select name="Departamento" id="departamento" onChange={(e)=>setDepartamento(e.target.value)}>
                        <option value={Departamento} defaultValue>Departamento</option>
                        { departamentos.map(element => {
                                return <option key= {element} value= {element} >{element}</option>
                            })}
                    </select></div>
                
                <div><label for="ciudad">Ciudad:</label>                  
                <select name="Ciudad" id="ciudad" onChange={(e)=>setCiudad(e.target.value)}>
                        <option value={Ciudad} defaultValue>Ciudad</option>
                        { data.map(element => {
                            if (element.departamento === Departamento)
                                {return <option key= {element.municipio} value= {element.municipio} >{element.municipio}</option>}
                            })}
                    </select></div>
                <div><label for="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombre} placeholder="Nombre iglesia" onChange={(e) => setNombre(e.target.value)} /></div>
                <div><label for="barrio">Barrio:</label>
                <input type="text" id="barrio" value={Barrio} placeholder="Barrio" onChange={(e) => setBarrio(e.target.value)} /></div>
                <div><label for="direccion">Dirección:</label>
                <input type="text" id="direccion" value={Direccion} placeholder="Dirección" onChange={(e) => setDireccion(e.target.value)} /></div>
                <div><label for="pastor">Pastor:</label>
                <input type="text" id="pastor" value={Pastor} placeholder="Pastor" onChange={(e) => setPastor(e.target.value)} /></div>
                <div><label for="telefono">Teléfono:</label>
                <input type="number" id="telefono" value={Telefono} placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} /></div>
                <div><label for="zona">Zona:</label>
                <input type="number" id="zona" value={Zona} placeholder="Zona" onChange={(e) => setZona(e.target.value)} /></div>
                <div><button className="btn guardar" type="submit" onClick={handleSubmit}>Guardar</button>
                <button className="btn cancelar" onClick={cancel}>Cancelar</button></div>
            </form>
        </div>)
}

export {Agregar}