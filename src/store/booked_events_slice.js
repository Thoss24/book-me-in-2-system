import { createSlice } from "@reduxjs/toolkit";

const defaultBookedEventsState = {
    bookedEvents: [],
    numberOfBookedEvents: 0
};

const bookedEventsSlice = createSlice({
    name: "booked-events",
    initialState: defaultBookedEventsState,
    reducers: {
        addEvent(state) {

        },
        removeEvent(state) {

        }
    }
});

export const bookedEventsActions = bookedEventsSlice.actions;
export default bookedEventsSlice.reducer