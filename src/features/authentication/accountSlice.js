import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountApi from './../../api/accountApi';
import StorageKeys from './../../constants/storage-keys';


// Async acction register
export const register = createAsyncThunk(
    'account/register',
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
    'account/login',
    async (payload) => {
        //call api to register
        const data = await accountApi.login(payload);
        //save data to localstorage
        localStorage.setItem(StorageKeys.TOKEN, data.data.token);
        localStorage.setItem(StorageKeys.ACCOUNT, JSON.stringify(data.data));
        //return user data
        return data.data;
    }
)


const accountSlice = createSlice({

    name: 'account',

    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.ACCOUNT)) || null,
    },
    reducers: {
        logout(state) {
            //clear local storage
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.ACCOUNT);
            //reset current
            state.current = null;
        }
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

const { actions, reducer} = accountSlice;

export const {logout} = actions;
export default reducer;