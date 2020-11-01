import React from 'react';
import '../styles/Legend.css';
import LegendTile from './LegendTile';
import {
    StatefulPopover,
    PLACEMENT,
    TRIGGER_TYPE,
} from 'baseui/popover';

const Legend = ({ domain }) => {

    return (
        
        <StatefulPopover
            placement={PLACEMENT.left}
            triggerType={TRIGGER_TYPE.hover}
            accessibilityType={'tooltip'}
            content={<div>Covid-19 Hospializations</div>}
        >
            <div className="Legend vertical" style={{height: `${window.innerHeight * .85}px`, width: '50px'}}>

                {
                    domain.map((v, i) => {
                        return (
                            <LegendTile backgroundColor="transparent" value={v}/>
                            
                        );
                    })
                }
            </div>
        </StatefulPopover>
        
    );
}

Legend.defaultProps = {
    domain: [2400, 1600, 800, 400,  200, 100, 50, 25, 0]
}

export default Legend;

