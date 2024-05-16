import {Address} from '../types/types';

export const getAddresses = async (): Promise<Address[] | null> => {
  try {
    const response = await fetch(
      'https://664500d2b8925626f890baef.mockapi.io/api/paramtech/addresslist',
      {
        method: 'GET',
      },
    );
    const addressList = await response.json();
    return addressList;
  } catch (error) {
    return null;
  }
};

export const addNewAddress = async (
  address: Address,
): Promise<Address[] | null> => {
  try {
    const response = await fetch(
      'https://664500d2b8925626f890baef.mockapi.io/api/paramtech/addresslist',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(address),
      },
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
