import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import { photoReducer } from "./photoReducer";

const reducerStore = configureStore({
    reducer: {
        todo: todoReducer,
        photo: photoReducer,
    },
});

export {
    reducerStore,
};
