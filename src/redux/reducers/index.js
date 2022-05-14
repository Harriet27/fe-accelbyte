import { configureStore } from "@reduxjs/toolkit";
import { hackernewsReducer } from "./hackernewsReducer";

const reducerStore = configureStore({
    reducer: {
        hackernews: hackernewsReducer,
    },
});

export {
    reducerStore,
};
