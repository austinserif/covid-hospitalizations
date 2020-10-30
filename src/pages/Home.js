import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="Home">
            <Link id="start-map-button" to="/map"><button>Go To Map!</button></Link>
        </div>
    );
}

export default Home;