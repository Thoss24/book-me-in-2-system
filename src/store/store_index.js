import { configureStore } from "@reduxjs/toolkit";
import bookedEventsReducer from "./booked_events_slice";

const store = configureStore({
    reducer: {
        bookedEvents: bookedEventsReducer
    }
});

export default store