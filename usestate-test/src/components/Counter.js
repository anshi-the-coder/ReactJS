import React, { useState } from 'react'

export default function Counter() {
const[count,setCount]=useState(0)
const increement=()=>{
setCount((prev)=>(prev+1))
}
const decreement=()=>{
setCount((prev)=>(prev-1))
}

  return (
      <div style={{padding:"40px"}}>
        <button onClick={increement}><b>+</b></button>
        <h1>{count}</h1>
        <button onClick={decreement}><b>-</b></button>
      
    </div>
  )
}
