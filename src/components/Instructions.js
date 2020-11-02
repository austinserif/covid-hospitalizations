import React from 'react';
import { Notification } from 'baseui/notification'
import '../styles/Instructions.css';

const Instructions = () => {
    return (
        <>
            <Notification 
                closeable 
                overrides={{
                    Body: {style: {width: 'auto', margin: '0px'}},
                }}
            >
                {() => (
                    <><h4>Covid-19 Hospitalizations in California by County and Date</h4>
                    <p>This map is interactive. To view changes in data over time, select and move slider.
                        For more information about a specfic county, hover or click on the county.</p></>
                    )}
            </Notification>
        </>
    );
}

export default Instructions;


