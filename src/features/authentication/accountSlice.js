import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountApi from './../../api/accountApi';
import StorageKeys from './../../constants/storage-keys';


// Async acction register
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //call api to register
        const data = await accountApi.register(payload);
        //save data to localstorage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.ACCOUNT, JSON.stringify(data.user));
        

        //return user data
        console.log(data.user)
        return data.user;
    }
)


// Async acction Login
export const login = createAsyncThunk(
    'user/register',
    async (payload) => {
        //call api to register
        const data = await accountApi.login(payload);
        //save data to localstorage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.ACCOUNT, JSON.stringify(data.user));

        //return user data
        console.log(data.user)
        return data.user;
    }
)


const accountSlice = createSlice({

    name: 'user',

    initialState: {
        // current: JSON.parse(localStorage.getItem(StorageKeys.ACCOUNT)) || {},
    },
    reducers: {

    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    }
});

const { reducer} = accountSlice;
export default reducer;