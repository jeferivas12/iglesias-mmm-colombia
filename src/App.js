import './App.css';
import React from 'react';
import {Titulo} from './titulo'
import { FiltroCiudades } from './FiltroCiudades';
import { Iglesias } from './iglesias';
import { Modal } from './Modal'
import { Firebase } from './firebase';


   function App() {
    const [jsonIglesias, setJsonIglesias] = React.useState([])
    const [departamento, setDepartamento] = React.useState("Departamento")
    const [ciudad, setCiudad] = React.useState("Ciudad")
    const [igle, setIgle] = React.useState(<h1>Esto es otra prueba</h1>)
    const [detail, setDetail] = React.useState(false)
    const [datosCiudad, setDatosCiudad] = React.useState([])
    const [datos, setDatos] = React.useState([])
    const [listDep, setListDep] = React.useState([])
  
    const listDepartamentos = []

    const fetchData = async () => {
      const D = await Firebase
      console.log("D")
      console.log(D)
      setJsonIglesias(D)
      console.log("jsonIglesias")
      console.log(jsonIglesias)
      D.forEach(e=>{
        if (!listDepartamentos.includes(e.Departamento))
        {console.log(e.Departamento)
        listDepartamentos.push(e.Departamento)}
      })
      console.log("listDepartamentos")
      console.log(listDepartamentos)
      setListDep(listDepartamentos)
      setDatos(departamento === "Departamento" ?D:D.filter(dato => dato.Departamento === departamento))
      setDatosCiudad(ciudad === "Ciudad" ?datos:datos.filter(dato => dato.Ciudad === ciudad))

      
    }

    React.useEffect(()=>{
      
      fetchData()
      
    },[jsonIglesias])
  

  return (
    <div className="App">
      <Titulo/>
      <FiltroCiudades
        datos = {datos}
        departamentos = {departamento}
        setDepartamento = {setDepartamento}
        listDep = {listDep.sort()}
        setCiudad = {setCiudad}
      />
      <Iglesias
        datosCiudad = {datosCiudad}
        setIgle = {setIgle}
        setDetail = {setDetail}
        detail = {detail}
      />
      {!!detail && (<Modal>
        {igle}
      </Modal>)}
    </div>
  );
}

export default App;
