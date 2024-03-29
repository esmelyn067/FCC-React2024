import { useState, useEffect } from 'react'
import './App.css'

function App() {
   
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

useEffect(()=> {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    
    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res=> res.json())
    .then(result =>{
       setData(result)
       console.log(result);
    })
    
  }
  fetchData();
}, [lat, long]);


  return (
    <>
      
    </>
  )
}

export default App
