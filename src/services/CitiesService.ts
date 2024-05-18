import {City} from '../types/types';

export const getCities = async (): Promise<City[] | null> => {
  try {
    const response = await fetch(
      'https://664500d2b8925626f890baef.mockapi.io/api/paramtech/cities',
      {
        method: 'GET',
      },
    );
    const cities = await response.json();
    return cities;
  } catch (error) {
    console.log('CitiesService getCities error: ' + error);
    return null;
  }
};
