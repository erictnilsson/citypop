/**
 * Fetches either the five largest cities for the queried country or a city, depending on the search type.
 * @param {*} query Search string
 * @param {*} searchType Type of search, only accepts 'country' or 'city
 * @param {*} parent The invoking parent component that handles the error
 */
export const queryApi = async (query, searchType, parent) => {
    switch (searchType) {
        case 'country':
            return fetchCitiesForCountry(query, parent);
        case 'city':
            return fetchCity(query, parent);
        default:
            this.onError('error, man');
            break;
    }
}

/**
 * Fetches an ISO-3166 country code.
 * @param {*} query Country search string
 * @param {*} parent The invoking parent component that handles the error
 */
const fetchCountryCode = async (query, parent) => {
    const url = `http://api.geonames.org/searchJSON?name=${query}&featureClass=A&featureCode=PCLI&maxRows=1&username=weknowit`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw response;
        return response.json();
    }
    catch (error) {
        parent.onError(error);
    }
}

/**
 * Fetches the five largest cities of the given country
 * @param {*} countryCode ISO-3166 country code used for search
 * @param {*} parent The invoking parent component that handles the error
 */
const fetchCities = async (countryCode, parent) => {
    const url = `http://api.geonames.org/searchJSON?country=${countryCode}&featureClass=P&featureCode=PPLA&featureCode=PPLC&featureCode=PPLA2&orderby=population&maxRows=5&username=weknowit`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw response;
        return response.json();
    } catch (error) {
        parent.onError(error);
    }
}

/**
 * Fetches the five largest cities of the given country using fetchCountryCode() and fetchCities().
 * @param {*} query Country search string
 * @param {*} parent The invoking parent component that handles the error
 */
const fetchCitiesForCountry = async (query, parent) => {
    return fetchCountryCode(query, parent)
        .then(async response => {
            if (response.geonames.length > 0) {
                const ccode = response.geonames[0].countryCode;
                return fetchCities(ccode, parent);
            }
        });
}

/**
 * Fetches a city.
 * @param {*} query City search string
 * @param {*} parent The invoking parent component that handles the error
 */
const fetchCity = async (query, parent) => {
    const url = `http://api.geonames.org/searchJSON?name_equals=${query}&featureClass=P&featureCode=PPLA&featureCode=PPLC&featureCode=PPLA2&orderby=population&maxRows=1&username=weknowit`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw response;
        return response.json();
    } catch (error) {
        parent.onError(error);
    }
}