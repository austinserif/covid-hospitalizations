import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Button } from 'baseui/button';
import {Heading, HeadingLevel} from 'baseui/heading';

const Home = () => {
    return (
        <div className="Home">
            <HeadingLevel>
                <Heading style={{width: "80vw", maxWidth: "600px"}} styleLevel={3}>Covid-19 Hospitalizations in California by County and Date</Heading>
            </HeadingLevel>
            <div>
                <Link id="start-map-button" to="/map"><Button>Go To Map</Button></Link>
            </div>
            
        </div>
    );
}

export default Home;