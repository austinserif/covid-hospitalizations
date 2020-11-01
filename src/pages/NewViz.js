import React, { useState, useEffect } from 'react';
import '../styles/NewViz.css';
import Instructions from '../components/Instructions';
import MapChart from '../components/MapChart';
import ReactTooltip from 'react-tooltip';
import Legend from '../components/Legend';
import DateSlider from '../components/DateSlider';
import { hospitalData } from '../data/hospitals';
import { StatefulTooltip } from 'baseui/tooltip';

const NewViz = () => {

    const [ dateString, setDateString ] = useState('2020-05-11');
    const dateArray = Object.keys(hospitalData);
    
    const min = 0;
    const max = dateArray.length - 1;

    const [ value, setValue ] = useState([min]);

    useEffect(() => {
        const updateDateString = () => {
            setDateString(() => (dateArray[value]));
        }
        updateDateString();
    }, [value, dateArray]);

    const [content, setContent] = useState("");

    return (
        <div className="NewViz">
            <div className="map-container">
                <div className="map">
                    <Instructions/>
                    <MapChart dateString={dateString} setTooltipContent={setContent}/>
                    <ReactTooltip>{content}</ReactTooltip>
                    {/* <Instructions/> */}
                </div>
                <div className="legend">
                    <StatefulTooltip
                        accessibilityType={'tooltip'}
                        content="Covid-19 Hospitalizations by County and Date"
                    >
                        <Legend/>
                    </StatefulTooltip>
                </div>
            </div>
            <div className="slider-container" ondragstart="event.preventDefault();
                        event.stopPropagation();">
                <div style={{width: '4%', height: '100%'}}></div>
                <DateSlider min={min} max={max} value={value} setValue={setValue} dateArray={dateArray}/>
                <div style={{width: '5%', height: '100%'}}></div>
            </div>
        </div>
    );
}

export default NewViz;