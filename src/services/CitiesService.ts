import {City} from '../types/types';

/** 
Returns the list of cities.
@return {Promise<City[] | null>} List of cities
*/
export const getCities = async (): Promise<City[] | null> => {
  try {
    const response = await fetch(
      'https://664500d2b8925626f890baef.mockapi.io/api/paramtech/cities',
      {
        method: 'GET',
        headers: {'content-type': 'application/json'},
      },
    );
    const cities = await response.json();
    return cities;
  } catch (error) {
    console.log('CitiesService getCities error: ' + error);
    return null;
  }
};
