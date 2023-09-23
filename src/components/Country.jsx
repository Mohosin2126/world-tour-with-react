import { useState } from "react";

const Country = ({country ,handleVisitedCountry}) => {
   const {name,flags,capital,region,languages,population,cca3}=country;
   const [visited,setVisited]=useState(false)
   const handleClick=()=>{
    setVisited(!visited)
   }
   
   const passWithParams=()=>{
    handleVisitedCountry(country)
   }



    return (
        <div >
            <div className="border-2
        border-indigo-500/50 m-2 p-4 rounded-xl h-96 ">
            <h1 className="text-center font-bold text-xl">{name.common}</h1>
            <img  className="w-80 h-62 mx-auto m-2 p-2 " src={flags.png} alt="" />
            <h3 className="text-center">Capital: {capital}</h3>
            <h3 className="text-center ">Region: {region}</h3>
            <h5 className="text-center">Population: {population}</h5>
   <h5 className="text-center">{cca3}</h5>
   <div className="flex ">
   <button onClick={handleClick} className="flex btn  mx-auto btn-outline btn-success btn-xs">{ !visited ? "going":"visited"}</button>
   <button onClick={passWithParams} className="flex btn  mx-auto btn-outline btn-success btn-xs">Mark as visited</button>
   </div>
 
        </div>
        </div>
    );
};

export default Country;