import { useEffect } from "react";
import { useState } from "react";
import Country from "../country";



const Countries = () =>{

const [countries,setCountries]=useState([])
const [visitedCountries,setVisitedCountries]=useState([])

useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then(res=>res.json())
  .then(data=>setCountries(data))

},[])
 const handleVisitedCountry=(country)=>{
const newVisitedCountries=[...visitedCountries,country]
setVisitedCountries(newVisitedCountries)
 }

    return (
      
        <div>
           <h1 className="text-center font-bold "> Countries: <span className="text-green-500">{countries.length}</span></h1>
           <div>
        <h5 className="text-center mb-2 mt-2 font-semibold">Visited Countries: <span className="text-red-600">{visitedCountries.length}</span></h5>
        <ul>
          {
            visitedCountries.map(country=><li className="text-center font-semibold mb-4" key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>

<div className="lg:grid lg:grid-cols-3">
  
{
          countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
         }
</div>
        </div>
    );
};

export default Countries;