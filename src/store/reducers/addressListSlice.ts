import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAddresses} from '../../services/AddressService';
import {Address} from '../../types/types';

export type AddressesListState = {
  addressList: Address[];
  error: boolean;
};

const initialState: AddressesListState = {
  addressList: [],
  error: false,
};

export const fetchAddresses = createAsyncThunk<Address[] | null>(
  'addressList/fetchAddresses',
  async (_, thunkAPI) => {
    const response = await getAddresses();
    if (!response) {
      thunkAPI.rejectWithValue('Adresler listelenemiyor.');
    }
    return response;
  },
);

const addressListSlice = createSlice({
  name: 'addressList',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addressList = [...state.addressList, action.payload];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      if (action.payload) {
        state.addressList = action.payload;
        state.error = false;
      }
    });
    builder.addCase(fetchAddresses.rejected, state => {
      state.error = true;
    });
  },
});

export default addressListSlice.reducer;
export const {addAddress} = addressListSlice.actions;
