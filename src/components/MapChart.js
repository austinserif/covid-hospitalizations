import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { hospitalData } from '../data/hospitals';

const MapChart = ({ setTooltipContent, dateString = '2020-06-11'}) => {

    const [data, setData] = useState(dateString)

    useEffect(() => {
        const updateData = () => {
            setData(() => (hospitalData[dateString]))
        }
        updateData();
    }, [dateString]);

    const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

    const domain = [0, 25, 50, 100,  200, 400, 800, 1600, 2400];
    const range = ["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"];

    const colorScale = scaleQuantile()
        .domain(domain)
        .range(range);

    return (
        <ComposableMap
            height={400}
            projection="geoAlbersUsa"
            style={{
                height:"80vh",
                width:"100vw !important"        
            }}

            projectionConfig={{
                scale: 1000
            }}
            data-tip=""
          >
            <ZoomableGroup zoom={window.innerWidth > 500 ? 3 : 5} center={[-119, 37.4194]}>
                <Geographies geography={geoUrl}>

                    {({ geographies }) => 
                        // eslint-disable-next-line
                        geographies.map(geo => {
                            if (geo.id.slice(0,2) === '06') {
                                const curr = data[geo.properties.name];
                                return (
                                    <Geography
                                        id={geo.id}
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={curr === undefined ? '#EEE' : colorScale(Math.floor(Number(curr.hospitalized_covid_confirmed_patients)))}
                                        stroke='black'
                                        strokeWidth='.3px'

                                        onMouseEnter={() => {
                                            setTooltipContent(`${geo.properties.name}: ${curr === undefined ? 'No data for selected date' : Math.floor(Number(curr.hospitalized_covid_confirmed_patients))}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            hover: {
                                                opacity: '.80',
                                                outline: 'none'
                                            },
                                            pressed: {
                                                opacity: '.80',
                                                outline: "none"
                                            }
                                        }}
                                    />
                                );
                            }
                        })    
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;