import React, {useEffect, useState} from 'react';
// import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import './App.css';


function App() {
  const [data,setData]=useState([]);

  const getData = () => {
    fetch('card-data.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
     setData(myJson)
    })
  }

  useEffect(() => {
    getData()
    
  }, [])

  return (
    <div className="App">
    <Header />
      {
       data && data.length>0 && data.map((item)=><div key={item.id}><Card item={item} /></div>)
     } 

     
    </div>
  );
}

export default App;
