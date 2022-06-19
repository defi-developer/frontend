import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
})

// infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>
// infer type from reducer
export type AppDispatch = typeof store.dispatch