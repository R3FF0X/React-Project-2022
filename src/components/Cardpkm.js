import React, {useEffect, useState} from 'react';
import axios from "axios";
import LoadingSreen from "./LoadingSreen";
import Home from "../pages/Home";


const Cardpkm = ({pokemon}) => {
    const [pkm, setPkm] = useState([]) ;


    useEffect(()=>{
        if(pokemon.url)
            axios.get(pokemon.url).then((res)=>{
                setPkm(res.data)})
    }, [pokemon])

    const typeColor = { "normal" : "#a0a3a0", "fighting" : "#ff8100", "flying": "#82baef","poison" : "#923fcc","ground" : "#92501b","rock" : "#b1ab82","bug" : "#92a312","ghost" : "#713f71","steel" : "#60a3b9","fire" : "#e72324","water" : "#2481ef","grass" : "#3ca224","electric" : "#fac100","psychic" : "#ef3f7a","ice" : "#3dd9ff","dragon" : "#4f60e2","dark" : "#4d3e3b","fairy" : "#ef71ef","unknown" : "#67998c","shadow" : "#434349"};

    return (

            <div className="row">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{pokemon.name}
                                    <div className="types">
                                        {pkm.types &&
                                            pkm.types.map((type) => (
                                                <img src={require('../assets/img/logoType/'+type.type.name+'.png')} alt="type-logo" width="100%" height="auto" />
                                            ))
                                        }
                                    </div>


                                </span>
                            <div className="imgPkm">
                                {pkm && pkm.sprites &&
                                    <img src={pkm.sprites.front_default} alt={pokemon.name}/>
                                }
                            </div>

                        </div>
                        {pkm.types &&



                            <div className="card-action" style={{background: typeColor[pkm.types[0].type.name]}
                            }>
                                <a href={'https://bulbapedia.bulbagarden.net/wiki/'+pokemon.name+'_(Pokémon)'} className="white-text">{pokemon.name}</a>
                            </div>
                        }
                    </div>
                </div>
            </div>

    )
};

export default Cardpkm;