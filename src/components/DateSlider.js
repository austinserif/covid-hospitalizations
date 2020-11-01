import React from 'react';
import { Slider } from 'baseui/slider';
import { isoToMonthDay } from '../helpers';
import '../styles/DateSlider.css';

const DateSlider = ({ min, max, dateArray, value, setValue }) => {
    return (
        <>
            <Slider
                className="DateSlider"
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
                    ThumbValue: ({$value}) => {
                        return (<div style={{
                            position: 'absolute',
                            top: '-25px',
                            backgroundColor: 'transparent',
                            width: '140px'
                        }}>
                            <React.Fragment>{isoToMonthDay(dateArray[$value])}</React.Fragment>
                        </div>);
                    },
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
        </>
    );
}

export default DateSlider;