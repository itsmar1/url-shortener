import { configureStore } from '@reduxjs/toolkit';

import urlSlice from './urlSlice';

const store = configureStore({
    reducer: {
        url: urlSlice.reducer
    }
});


export default store;