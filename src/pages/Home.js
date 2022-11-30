import React from 'react';
import Navigation from '../components/Navigation';
import pokeball from './pokeball.png'
import Favoris from "../components/Favoris";
import {Provider} from "react-redux";
import {Store} from "../components/Store"




const Home = () => {
    return (
        <div>
            <Navigation />
            <h1> Page d'accueil</h1>
            <Provider store={Store}>
                <Favoris />
            </Provider>
        </div>
    );
};

export default Home;