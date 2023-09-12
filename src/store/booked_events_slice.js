import { createSlice, current } from "@reduxjs/toolkit";

const defaultBookedEventsState = {
    bookedEvents: [],
    numberOfBookedEvents: 0
};

const bookedEventsSlice = createSlice({
    name: "booked-events",
    initialState: defaultBookedEventsState,
    reducers: {
        replaceBookedEvents(state, action) {
            state.bookedEvents = [action.payload]
        },
        addEvent(state, action) {
           const existingBookedEventIndex = state.bookedEvents.findIndex((event) => event.id === action.id);
           
            console.log(action)
        },
        removeEvent(state, action) {

        }
    }
});

export const bookedEventsActions = bookedEventsSlice.actions;
export default bookedEventsSlice.reducer