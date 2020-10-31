import React, { useState, useEffect } from 'react';
import MapChart from '../components/MapChart';
import '../styles/Visualization.css';
import { hospitalData } from '../data/hospitals';
import ReactTooltip from 'react-tooltip';
import { Slider } from 'baseui/slider';

const Visualization = () => {

    const isoToMonthDay = (isoString) => {
        const [year, month, day] = isoString.split('-');

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

        return `${monthDictionary[month]} ${day.replace('0', '')}`
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

    return (
        <div className="Visualization">
            <div>
                <MapChart dateString={dateString} setTooltipContent={setContent}/>
                <ReactTooltip>{content}</ReactTooltip>
            </div>
            <div>
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
                              top:  '-30px',
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
            </div>

        </div>
    );
}

export default Visualization;