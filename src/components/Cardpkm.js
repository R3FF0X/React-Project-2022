import React, {useEffect, useState} from 'react';
import axios from "axios";
import LoadingSreen from "./LoadingSreen";



const Cardpkm = ({pokemon}) => {
    const [pkm, setPkm] = useState([]) ;


    useEffect(()=>{
        if(pokemon.url)
            axios.get(pokemon.url).then((res)=>{
                console.log(res.data)
                setPkm(res.data)})
    }, [pokemon])



    const typeColor = { "normal" : "#a0a3a0", "fighting" : "#ff8100", "flying": "#82baef","poison" : "#923fcc","ground" : "#92501b","rock" : "#b1ab82","bug" : "#92a312","ghost" : "#713f71","steel" : "#60a3b9","fire" : "#e72324","water" : "#2481ef","grass" : "#3ca224","electric" : "#fac100","psychic" : "#ef3f7a","ice" : "#3dd9ff","dragon" : "#4f60e2","dark" : "#4d3e3b","fairy" : "#ef71ef","unknown" : "#67998c","shadow" : "#434349"};


    return (


            <div className="row">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{pokemon.name}</span>
                            {pkm && pkm.sprites &&
                                <img src={pkm.sprites.front_default} alt={pokemon.name}/>
                            }
                        </div>
                        <div className="card-action">

                            {pkm.types &&

                                pkm.types.map((type)=>(
                                    <p>{type.type.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cardpkm;