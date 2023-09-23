const Country = ({country}) => {
   const {name,flags,capital}=country
    return (
        <div className="border-2
        border-indigo-500/50 m-4 p-4 rounded-4 ">
            <h1 className="text-center font-bold text-xl">{name.common}</h1>
            <img  className="w-80 mx-auto m-4 p-4 " src={flags.png} alt="" />
            <h3 className="text-center">{capital}</h3>
        </div>
    );
};

export default Country;