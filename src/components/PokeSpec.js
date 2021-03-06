import React from 'react'

export const PokeSpec = ({poke}) => {
  return (
    <div style={{width:'40%', height:'80vh',position:'absolute',top:'0', right:'0',left:'60%'}}>
      <figure style={{width:'25%', margin:'auto'}}>
        <img src={poke.sprites.front_default} alt={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} style={{width:'100%', height:'auto'}}/>
      </figure>
      <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <h3 style={{width:'100%', textAlign:'center'}}>Name:{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>
        <h3 style={{width:'50%',textAlign:'center',borderTop:'1px solid grey', paddingTop:'5%'}}>Stats:</h3>
        <p style={{fontSize:'1.5rem'}}>Weight: {(poke.weight)/10}kg </p>
        <p style={{fontSize:'1.5rem'}}>Height: {(poke.height)/10}m </p>
        <p style={{fontSize:'1.5rem'}}>Base Exp: {poke.base_experience}</p>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', width: '17%'}}>
          <p style={{fontSize:'1.5rem'}}>Type:</p>
          <ul style={{display:'inline-block',listStyle:'none',paddingLeft:'0', listStylePosition:'inside' }}>            
            {poke.types.map(({type}, index) =>{
                return <li key={index}  style={{fontSize:'1.5rem'}}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</li>
          })}
          </ul>
        </div>
      </div>
    </div>
  )
}

