import React, { useState, useEffect } from 'react';
import MapChart from '../components/MapChart';
import '../styles/Visualization.css';
import { hospitalData } from '../data/hospitals';
import ReactTooltip from 'react-tooltip';
import { Slider } from 'baseui/slider';
import { Card, StyledAction, StyledBody } from 'baseui/card';
import { StyledHead, StyledHeadCell } from 'baseui/table';
import { withStyle } from 'baseui';
import Instructions from '../components/Instructions';
import { StatefulTooltip } from 'baseui/tooltip';

const Visualization = () => {

    const domain = [0, 25, 50, 100,  200, 400, 800, 1600, 2400];
    const range = ["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"];

    const isoToMonthDay = (isoString) => {
        const [,month, day] = isoString.split('-');

        const monthDictionary = {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December"
        }

        return `${monthDictionary[month]} ${day[0] === '0' ? day.slice(1) : day}`
    }

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

    const SmallerHeadCell = withStyle(StyledHeadCell, {
        width: `${Math.floor(window.innerWidth / domain.length)}px`
    });

    return (
        <div className="Visualization">
            <div className="map-container">
                <Instructions/>
                <MapChart dateString={dateString} setTooltipContent={setContent}/>
                <ReactTooltip>{content}</ReactTooltip>
            </div>
            <div className="slider-card">
                <Card
                    overrides={{Root: {style: {width: '100vw', height: '100%'}}}}
                >
                    <StyledBody>
                    <StatefulTooltip
                        accessibilityType={'tooltip'}
                        content="Covid-19 Hospitalizations by County and Date"
                    >
                        <StyledHead>
                            {domain.map((col, index) => (
                                <SmallerHeadCell className="legend-tile" style={{backgroundColor: range[index]}} key={index}>{col}</SmallerHeadCell>
                            ))}
                        </StyledHead>
                    </StatefulTooltip>
                    </StyledBody>
                    <StyledAction>
                        <Slider 
                            min={min} 
                            max={max} 
                            onChange={({ value }) => value && setValue(value)} 
                            value={value}
                            overrides={{
                                Root: {
                                style: {
                                    marginTop: '24px',
                                },
                                },
                                InnerThumb: () => null,
                                ThumbValue: ({$value}) => (
                                <div
                                    style={{
                                    position: 'absolute',
                                    top:  '-25px',
                                    backgroundColor: 'transparent',
                                    width: '140px'
                                    }}
                                    >
                                    <React.Fragment>{isoToMonthDay(dateArray[$value])}</React.Fragment>
                                </div>
                                ),
                                TickBar: () => (
                                <div
                                    style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                    }}
                                >
                                    <div>Apr</div>
                                    <div>May</div>
                                    <div>Jun</div>
                                    <div>Jul</div>
                                    <div>Aug</div>
                                    <div>Sep</div>
                                    <div>Oct</div>
                                </div>
                                ),
                            }}
                        />
                    </StyledAction>
                </Card >
            </div>
        </div>
    );
}

export default Visualization;