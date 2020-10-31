import React from 'react';
import { Notification } from 'baseui/notification'
import '../styles/Instructions.css';

const Instructions = () => {

    return (
        <>
            <Notification 
                closeable 
                overrides={{
                    Body: {style: {width: 'auto'}},
                }}
            >
                {() => (
                    `This map is interactive! To see how Covid-19 hospitalizations in California changed between March and October,
                    move the slider to the right and left. To view the name and hospitalization statistics for a given county and date,
                    simply hover or click on that county.`
                    )}
            </Notification>
        </>
    );
}

export default Instructions;


