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
            <div className="card shadow-xl border-2
        border-indigo-500/50 m-2 p-1  rounded-xl w-96 h-96 ">
            <h1 className="text-center font-bold text-2xl">{name.common}</h1>
            <img  className="w-80 h-40 mx-auto mt-2  " src={flags.png} alt="" />
            <h3 className="text-center mt-2 font-semibold  text-xl">Capital: {capital}</h3>
            <h3 className="text-center  font-semibold mt-1">Region: {region}</h3>
            <h5 className="text-center font-semibold ">Population: {population}</h5>
   <h5 className="text-center font-semibold">Code: {cca3}</h5>
   <div className="flex ">
   <button onClick={handleClick} className="flex btn  mx-auto btn-outline btn-ghost text-red-500  btn-xs">{ !visited ? "going":"visited"}</button>
   <button onClick={passWithParams} className="flex btn  mx-auto text-red-500 btn-outline btn-success btn-xs">Mark as visited</button>
   </div>
 
        </div>
        </div>
    );
};

export default Country;