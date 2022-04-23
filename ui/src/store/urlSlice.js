import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    longUrl: '',
    shortUrl: ''
};


const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        setShortUrl(state, action) {
            state.shortUrl = action.payload;
        },
        setLongUrl(state, action) {
            state.longUrl = action.payload;
        }
    }
});


export const urlActions = urlSlice.actions;

export default urlSlice;