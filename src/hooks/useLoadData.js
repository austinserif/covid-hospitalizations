import { useState, useEffect } from "react";
import getData from "../helpers/getData";

const useLoadData = () => {
    const [data, setData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [dateArray, setDateArray] = useState(false);

    const constructDateArray = (object) => {

        //return array of dates keys
        return Object.keys(object);
    }

    useEffect(() => {
        /**
         * Calls main getter function and allocates information 
         * to different pieces of state depending on success or failure
         * of getter to get data from server
         */
        const handleGetData = async () => {
            try {
                // retrieve data from server
                const response = await getData();

                // set data into state
                setData(response);

                // turn off loading
                setIsLoading(false);

                // set date array into state
                setDateArray(() => constructDateArray(response, "Los Angeles"));

            } catch(err) {
                // if failure occurs set error object into state
                setErr(err);
            }
        }

        // call data handler
        if (!data) {
            handleGetData();
        }
    }, [data]);

    return [data, isLoading, err, dateArray];
}

export default useLoadData;
