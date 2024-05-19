import {Address} from '../types/types';

/** 
Returns the list of addresses.
@return {Promise<Address[] | null>} List of addresses
*/
export const getAddresses = async (): Promise<Address[] | null> => {
  try {
    const response = await fetch(
      'https://664500d2b8925626f890baef.mockapi.io/api/paramtech/addresslist',
      {
        method: 'GET',
        headers: {'content-type': 'application/json'},
      },
    );
    const addressList = await response.json();
    return addressList;
  } catch (error) {
    console.log('AddressListService getAddresses error: ' + error);
    return null;
  }
};

/** 
Adds an address to address list, returns the address list.
@param {Address} Address to be added
@return {Promise<Address[] | null>} List of addresses
*/
export const addNewAddress = async (
  address: Address,
): Promise<Address[] | null> => {
  try {
    const response = await fetch(
      'https://664500d2b8925626f890baef.mockapi.io/api/paramtech/addresslist',
      {
        headers: {'content-type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(address),
      },
    );
    return response.json();
  } catch (error) {
    console.log('AddressListService addNewAddress error: ' + error);
    return null;
  }
};
