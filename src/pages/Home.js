import React from 'react';
import Navigation from '../components/Navigation';
import pokeball from './pokeball.png'


const Home = () => {
    return (
        <div>
            <Navigation />
            <h1> Page d'accueil</h1>

            <img className="imgLogo" src={'./pokeball.png'}/>
        </div>
    );
};

export default Home;