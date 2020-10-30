import { useState, useEffect } from 'react';
import fs from 'fs';



const useLoadData = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        const loadData = () => {
            const rawData = fs.readFile('../data/hospitals.json');
            const parsedData = JSON.parse(rawData);
            setData(() => (parsedData));
        }
        loadData();
    }, []);

    return data;
}

export default useLoadData;