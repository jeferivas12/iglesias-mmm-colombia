import './App.css';
import React from 'react';
import {Titulo} from './titulo'
import { FiltroCiudades } from './FiltroCiudades';
import { Iglesias } from './iglesias';
import { Modal } from './Modal'
import { Firebase } from './firebase';
import { Agregar } from './agregar';
//import { IglesiaSearch } from './search'

   function App() {
   // const [jsonIglesias, setJsonIglesias] = React.useState([])
    const [departamento, setDepartamento] = React.useState("Departamento")
    const [ciudad, setCiudad] = React.useState("Ciudad")
    const [igle, setIgle] = React.useState(<h1>Esto es otra prueba</h1>)
    const [detail, setDetail] = React.useState(false)
    const [datosCiudad, setDatosCiudad] = React.useState([])
    //const [datos, setDatos] = React.useState([])
    const [listDep, setListDep] = React.useState([])
    const [crearIglesia, setCrearIglesia] = React.useState(false)
    //const [search, setSearch] = React.useState('')
    const [iglesias, setIglesias] = React.useState([])
    const listDepartamentos = []

    const fetchData = async () => {
      let temporal =  await Firebase
      
      setIglesias(temporal)
      console.log("iglesias: "+iglesias)
      temporal.forEach(e=>{
        if (!listDepartamentos.includes(e.Departamento))
        {listDepartamentos.push(e.Departamento)}
      })
      
      setListDep(listDepartamentos)
      
      console.log("hola")
      
    }
    React.useEffect(()=>{
      console.log("hola useEffect1")
      fetchData()
      console.log("chao useEffect1")
    },[iglesias])
    
    
    
      

  return (
    <div className="App">
      <Titulo/>
      <FiltroCiudades
        iglesias = {iglesias}
        setDepartamento = {setDepartamento}
        listDep = {listDep.sort()}
        setCiudad = {setCiudad}
        setCrearIglesia = {setCrearIglesia}
        crearIglesia = {crearIglesia}
        departamento = {departamento}
        setDatosCiudad = {setDatosCiudad}
      />
      {/* <IglesiaSearch
        setSearch = {setSearch}
        search = {search}
      /> */}
      <Iglesias
        datosCiudad = {datosCiudad}
        setIgle = {setIgle}
        setDetail = {setDetail}
        detail = {detail}
        ciudad={ciudad}
        setDatosCiudad={setDatosCiudad}
        iglesias={iglesias}
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
