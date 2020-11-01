import React from 'react';

const LegendTile = ({ value, backgroundColor }) => {
    return (
        <div className="LegendTile" style={{backgroundColor, width: '100%', height: `${(window.innerHeight * .85) / 16}px`, position: 'relative', marginTop: '50%'}}>
            {value}
        </div>
    );
}

export default LegendTile;