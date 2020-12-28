import { useState, useEffect } from "react";

const useDateSlider = (dateArray, data) => {
    const min = 0;
    const max = dateArray.length - 1;

    const [rangeValue, setRangeValue] = useState(50);
    const [currentData, setCurrentData] = useState(data[dateArray[rangeValue]]);
    
    const updateRangeValue = (value) => {
        if (value < min) {
            setRangeValue(min);
        } else if (value > max) {
            setRangeValue(max);
        } else {
            setRangeValue(value);
        }
    };

    useEffect(() => {
        setCurrentData(() => data[dateArray[rangeValue]])
    }, [rangeValue, data, dateArray]);

    return [currentData, rangeValue, updateRangeValue, max, min];
};

export default useDateSlider;