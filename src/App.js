import React, {useState, useEffect} from "react";
import "./App.css";
import data from "./data.js"
import axios from "axios";
import Nasa from "./Nasa";


function App() {
  const[veri, setVeri] = useState();
  const[arama, setArama] = useState("2023-08-08");


  const aramaHandler = (event) => {
    setArama(event.target.value)
  }


  useEffect(()=>{
    const url ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+arama;
    setVeri(null);
    axios.get(url)
    .then(response =>{
      setVeri(response.data);

    }).catch(err =>{
      console.log("error",err)
    })
  }, [arama]) // sayfa arama state'i  güncellendiğinde  çalışır.
  
 /* useEffect(()=>{

  } )    // Herhangi bir state güncellendiğinde çalışır.

  useEffect(()=>{

  }, [veri, arama, ...]) // Sadece veri ve arama state'leri güncellendiğinde çalışır

   useEffect(()=>{

  }, []) // sayfa yüklendiğinde bir kere çalışır

  */
  return (
    <div className="App">
      {
        veri ? <Nasa arama = {arama} aramaHandler ={aramaHandler} veri = {veri} /> : <h2>Yükleniyor...</h2>// eğer en soldaki veri varsa Nasa ile başlayan component yüklenecek
      }
    </div>
  );
}

export default App;
