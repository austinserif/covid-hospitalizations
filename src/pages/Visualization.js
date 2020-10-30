import React, { useState, useEffect } from 'react';
import MapChart from '../components/MapChart';
import '../styles/Visualization.css';
import { hospitalData } from '../data/hospitals';
import ReactTooltip from 'react-tooltip';

const Visualization = () => {

    const [ dateString, setDateString ] = useState('2020-05-11');
    const dateArray = Object.keys(hospitalData);
    
    const min = 0;
    const max = dateArray.length - 1;

    const [ value, setValue ] = useState(min);

    const handleChange = (e) => {
        setValue(() => (e.target.value));
    }

    useEffect(() => {
        const updateDateString = () => {
            setDateString(() => (dateArray[value]));
        }
        updateDateString();
    }, [value, dateArray]);

    const [content, setContent] = useState("");

    return (
        <div className="Visualization">
            <div>
                <MapChart dateString={dateString} setTooltipContent={setContent}/>
                <ReactTooltip>{content}</ReactTooltip>
            </div>
            <div>
                <input type="range" min={min} max={max} onChange={handleChange} value={value}/>
            </div>

        </div>
    );
}

export default Visualization;