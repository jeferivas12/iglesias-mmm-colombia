import './App.css';
import React from 'react';
import {Titulo} from './titulo'
import { FiltroCiudades } from './FiltroCiudades';
import { Iglesias } from './iglesias';
import { Modal } from './Modal'
import { Firebase } from './firebase';
import { Agregar } from './agregar';


   function App() {
    const [jsonIglesias, setJsonIglesias] = React.useState([])
    const [departamento, setDepartamento] = React.useState("Departamento")
    const [ciudad, setCiudad] = React.useState("Ciudad")
    const [igle, setIgle] = React.useState(<h1>Esto es otra prueba</h1>)
    const [detail, setDetail] = React.useState(false)
    const [datosCiudad, setDatosCiudad] = React.useState([])
    const [datos, setDatos] = React.useState([])
    const [listDep, setListDep] = React.useState([])
    const [crearIglesia, setCrearIglesia] = React.useState(false)
    const listDepartamentos = []

    const fetchData = async () => {
      const D = await Firebase
      
      setJsonIglesias(D)
      
      D.forEach(e=>{
        if (!listDepartamentos.includes(e.Departamento))
        {listDepartamentos.push(e.Departamento)}
      })
      
      setListDep(listDepartamentos)
      setDatos(departamento === "Departamento" ?D:D.filter(dato => dato.Departamento === departamento))
      setDatosCiudad(ciudad === "Ciudad" ?datos:datos.filter(dato => dato.Ciudad === ciudad))

      
    }

    React.useEffect(()=>{
      
      fetchData()
      
    },[jsonIglesias, datosCiudad])
  

  return (
    <div className="App">
      <Titulo/>
      <FiltroCiudades
        datos = {datos}
        departamentos = {departamento}
        setDepartamento = {setDepartamento}
        listDep = {listDep.sort()}
        setCiudad = {setCiudad}
        setCrearIglesia = {setCrearIglesia}
        crearIglesia = {crearIglesia}
        setDatosCiudad = {setDatosCiudad}
      />
      <Iglesias
        datosCiudad = {datosCiudad}
        setIgle = {setIgle}
        setDetail = {setDetail}
        detail = {detail}
      />
      {/* <button onClick={setCrearIglesia(!crearIglesia)}>Crear iglesia</button> */}
      {!! crearIglesia && (<Modal><Agregar crearIglesia = {setCrearIglesia}/></Modal>)}
          
      
      {!!detail && (<Modal>
        {igle}
      </Modal>)}
      
    </div>
  );
}

export default App;
