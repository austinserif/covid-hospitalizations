import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile, scaleQuantize, scaleLinear } from "d3-scale";
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

    const colorScale = scaleLinear()
        // .domain(Object.values(data).map(d => Number(d.hospitalized_covid_confirmed_patients)))
        .domain([0, 200, 400, 600,  800, 1000, 1200, 1400, 1600])
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618"
        ]);

    return (
        <ComposableMap
            projection="geoAlbersUsa"
            style={{
                height:"90vh",
                width:"90vw"        
            }}

            projectionConfig={{
                scale: 1000
            }}
            data-tip=""
          >
            <ZoomableGroup zoom={7} center={[-119, 37.4194]}>
                <Geographies geography={geoUrl}>

                    {({ geographies }) => 
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
                                        strokeWidth='1px'
                                        onMouseEnter={() => {
                                            const { NAME, POP_EST } = geo.properties;
                                            setTooltipContent(`${geo.properties.name}: ${curr === undefined ? 'No data for selected date' : Math.floor(Number(curr.hospitalized_covid_confirmed_patients))}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            hover: {
                                                fill: "black",
                                                outline: 'none'
                                            },
                                            pressed: {
                                                fill: "white",
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