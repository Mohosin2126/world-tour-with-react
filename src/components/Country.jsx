const Country = ({country}) => {
   const {name,flags,capital,region,languages,population}=country;
    return (
        <div >
            <div className="border-2
        border-indigo-500/50 m-4 p-4 rounded-4 h-96 ">
            <h1 className="text-center font-bold text-xl">{name.common}</h1>
            <img  className="w-80 h-62 mx-auto m-2 p-2 " src={flags.png} alt="" />
            <h3 className="text-center">Capital: {capital}</h3>
            <h3 className="text-center ">Region: {region}</h3>
            <h5 className="text-center">Population: {population}</h5>

        </div>
        </div>
    );
};

export default Country;