import * as Realm from "realm-web";

/**
 * Requests data from server and maps response into a 
 * new object of the following schema:
 * ```
 * {
 *      "04-08-2020": {
 *          "Butte": { ... },
 *          "Del Norte": { ... },
 *          ...
 *      },
 *      "04-09-2020": { ... },
 *      ...
 * }
 * ```
 */
const getData = async () => {
    try {
        // create app instance
        const app = new Realm.App({id: "covid-data-api-evkdy"});

        // create anonymous creds obj
        const creds = Realm.Credentials.anonymous();

        // instantiate anonymous user
        const user = await app.logIn(creds);

        // await and return response
        const response = await user.functions.getData();

        // map array response to an object
        const obj = {};
        response.forEach(v => {
            // delete residual id prop from database query
            delete v._id;

            // add to object where date is the key
            obj[v.date] = v;

            // remove redundant date prop from within new prop
            delete obj[v.date].date;
        });

        // return mapped object
        return obj;
    } catch(err) {
        // handle and pass on any errors
        throw new Error(err.message);
    }
}

export default getData;