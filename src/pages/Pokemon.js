import React from 'react';
import Navigation from '../components/Navigation';
import Pokedex from "../components/Pokedex";



const Pokemon = () => {

    return (
        <div>
            <Navigation />
            <h1>Pokedex</h1>
            <br/>

            <Pokedex/>
            
            

        </div>
    );
};

export default Pokemon;