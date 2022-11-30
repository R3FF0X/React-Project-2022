import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cardpkm from "./Cardpkm";

const Pokedex = () => {
    const [pokemons, setPkm] = useState([]) ;
    const [nbPkm, setNbPkm] = useState([]) ;

    useEffect(()=>{

        const asyncFunction = async ()=>{
            try{
                const nbPkm = await axios.get("https://pokeapi.co/api/v2/pokemon");
                setNbPkm(nbPkm.data.count)
                const pkm = await axios.get("https://pokeapi.co/api/v2/pokemon/", {params:{limit:nbPkm.data?.count}})

                setPkm(pkm.data.results)

            }catch (e) {
                return e;
            }

        }
        asyncFunction();

    }, [])



    return (
        <div className="pokedex">
            <ul>
                {pokemons &&

                    pokemons.map((pokemon)=>(
                        <Cardpkm key={pokemon.name} pokemon={pokemon}/>
                    ))
                }
            </ul>
        </div>

    );
};

export default Pokedex;