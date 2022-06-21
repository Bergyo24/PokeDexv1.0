import React, { useEffect, useState} from 'react'
import {Card,Button} from "react-bootstrap";
import {PokeSpec} from './PokeSpec.js';

export const Pokemons = () => {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=9');
    const [pokeData, setData] = useState([]);
    const [clicked, setClicked] = useState({clicked: false, id:0});

    const getPokemons = async () => {
        let res = await fetch(pokemons);
        let resData = await res.json();
        getPokeData(resData);
        setPokemon(resData.next);
        console.log(resData);
        setLoading(false);
    }
    const getPokeData = async (data)=>{
        setLoading(true);
        //console.log(data.results);
        data.results.forEach(async element => {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`);    
            let dataPoke = await res.json();
            setData(list => [...list, dataPoke]);
            pokeData.sort((a, b) => a.id - b.id) 
        });
        setLoading(false);
    }

    useEffect(() => {
        getPokemons();
    }, []) 

  return (
    <>
        <div style={{display:'flex', flexWrap:'wrap', width:'49%', height:'80vh',overflowY:'scroll', borderRight: '2px solid grey', margin:'0'}}>
            {loading && <h1>Please wait...</h1>}
            {!loading && pokeData.map((element, index) =>{
                return(
                <Card style={{ width: '15%', height:'15vh',margin:'2.5%', cursor:'pointer' }} key={index} onClick={()=>setClicked({clicked:true, id:index})}>
                <Card.Img variant="top" src={element.sprites.front_default} alt={element.name} />
                <Card.Body style={{padding:'0', display:'flex', alignItems:'center'}}>
                    <Card.Title style={{width:'100%',fontSize:'1rem', margin:'0', paddingTop:'5%', textAlign:'center'}}>{element.name.charAt(0).toUpperCase() + element.name.slice(1)}</Card.Title>
                    {/* <Button variant="primary" onClick={()=>{setClicked({clicked:true, id: index})}}>Go somewhere</Button> */}
                </Card.Body>
                </Card>)
            })} 
        </div>
        {/* {pokeData && <PokeSpec style={{width:'50%'}}poke={pokeData[clicked.id]}/> } */}
        {clicked.clicked && <PokeSpec poke={pokeData[clicked.id]}/> }
        {<Button onClick={()=>getPokemons()} style={{marginLeft:'20.5%'}}>Load more</Button> }
    </>
  )
}
