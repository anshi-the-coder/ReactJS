import React, { useEffect, useState } from 'react'

function Biodata() {
    const [name,setName]=useState("")

    useEffect(()=>{
        console.log(2+2)
        console.log(2+2)
        console.log(2+2)
        console.log(2+2)
        console.log(2+2)
        console.log(2+2)
        console.log(2+2)
        console.log(2+2)    
        console.log("Name changed to "+name)
    },[name])

    function setState(e){
        e.preventDefault()
        setName(e.target.value)
    }


  return (
    <div>
        <h1>{name}</h1>
      <input onChange={setState} value={name} />
    </div>
  )
}

export default Biodata
