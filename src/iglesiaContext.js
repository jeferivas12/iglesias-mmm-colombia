import React from 'react';

const IglesiaContext = React.createContext()

const jsonIglesias = [
    {
        "nombre":"MMM Boston",
        "pastor":"Pedro David Gamez",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Boston",
        "Ciudad":"Medellin",
        "Departamento":"Antioquia",
        "Telefono":"6045055228",
        "Imagen":"boston.jpg"
    },
    {
        "nombre":"MMM Caicedo",
        "pastor":"Hugo Marin",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Caicedo",
        "Ciudad":"Medellin",
        "Departamento":"Antioquia",
        "Telefono":"1234567",
        "Imagen":"boston.jpg"
    },
    {
        "nombre":"MMM Enciso",
        "pastor":"Damil Arteaga",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Enciso",
        "Ciudad":"Cali",
        "Departamento":"Valle del cauca",
        "Telefono":"12345",
        "Imagen":"boston.jpg"
    },
    {
        "nombre":"MMM Sede Centro",
        "pastor":"Pablo Castro",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Centro",
        "Ciudad":"Bogota",
        "Departamento":"Bogota",
        "Telefono":"3216547",
        "Imagen":"boston.jpg"
    }
  ]

function IglesiaProvider(props) {
  const [departamento, setDepartamento] = React.useState("Departamento")
  const [ciudad, setCiudad] = React.useState("Ciudad")
  const [igle, setIgle] = React.useState(<h1>Esto es otra prueba</h1>)
  const [detail, setDetail] = React.useState(false)

  const listDepartamentos = []
  const datos = departamento === "Departamento" ?jsonIglesias:jsonIglesias.filter(dato => dato.Departamento === departamento)
  const datosCiudad = ciudad === "Ciudad" ?datos:datos.filter(dato => dato.Ciudad === ciudad)

  jsonIglesias.forEach(e=>{
    if (!listDepartamentos.includes(e.Departamento))
    listDepartamentos.push(e.Departamento)
  })
  return (
    <IglesiaContext.Provider value={{
        departamento,
        setDepartamento,
        ciudad,
        setCiudad,
        igle,
        setIgle,
        detail,
        setDetail,
        listDepartamentos,
        datos,
        datosCiudad,
    }}>
        {props.children}
    </IglesiaContext.Provider>
  )
}

export {IglesiaContext, IglesiaProvider}