import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

/**
 * MapChart component renders SVG based map all 58 counties in california. Due to the nature 
 * of the project, URLs and scales are hard coded and the component is not designed for re-usability.
 */
const MapChart = ({ setTooltipContent, data }) => {

    const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";


    const domain = [0, 2, 4, 8, 16, 32, 64, 128];
    const range = ["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"];

    const colorScale = scaleQuantile()
        .domain(domain)
        .range(range);

    return (
        <ComposableMap
            height={400}
            projection="geoAlbersUsa"
            style={{
                height:"100%",
                width: '100%'
                // width: `${window.innerWidth - 100}px`
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
                                            setTooltipContent(`${geo.properties.name}: ${curr === undefined ? 'No data for selected date' : Number(curr.hospitalized_covid_confirmed_patients)}`);
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