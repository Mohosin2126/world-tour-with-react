import { useEffect } from "react";
import { useState } from "react";
import Country from "../country";


const Countries = () =>{

const [countries,setCountries]=useState([])
useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then(res=>res.json())
  .then(data=>setCountries(data))

},[])


    return (
      
        <div>
           <h1 className="text-center font-bold "> Name: {countries.length}</h1>

<div className="lg:grid lg:grid-cols-3">
  
{
          countries.map(country => <Country key={country.cca3} country={country}></Country>)
         }
</div>
        </div>
    );
};

export default Countries;