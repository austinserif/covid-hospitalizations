import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Button } from 'baseui/button';
import {Heading, HeadingLevel} from 'baseui/heading';
import { Spinner } from 'baseui/spinner';


const Home = ({ isLoading }) => {
    return (
        <div className="Home">
            <HeadingLevel>
                <Heading style={{width: "80vw", maxWidth: "600px"}} styleLevel={3}>Covid-19 Hospitalizations in California by County and Date</Heading>
            </HeadingLevel>
            <div>
                {
                    isLoading ? (  <Spinner/>) : (<Link id="start-map-button" to="/map"><Button>Go To Map!</Button></Link>)
                }
            </div>
            
        </div>
    );
}

export default Home;