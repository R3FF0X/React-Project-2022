import React from 'react';
import Navigation from '../components/Navigation';
import Pokedex from "../components/Pokedex";
import {Store} from "../components/Store";
import {Provider} from "react-redux";



const Pokemon = () => {

    return (
        <div>
            <Navigation />
            <h1>Pokedex</h1>
            <br/>
            <Provider store={Store}>
                <Pokedex/>
            </Provider>
            
            

        </div>
    );
};

export default Pokemon;