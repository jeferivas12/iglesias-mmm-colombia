import React from "react"


function IglesiaSearch(props) {
    
    const onChangeSearch = (event)=>{
        console.log(`Estas buscando ${event.target.value}`)
        props.setSearch(event.target.value)
    }
    return(
        <input 
            className='IglesiaSearch' 
            placeholder='Buscar'
            value={props.search}
            onChange={onChangeSearch}
        />)
}

export {IglesiaSearch}