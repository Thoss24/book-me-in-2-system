import { createSlice } from "@reduxjs/toolkit";

const defaultEventsState = {
    events: []
};

const eventsSlice = createSlice({
    name: 'events-slice',
    initialState: defaultEventsState,
    reducers: {
        addEvent(state, action) {
            console.log(action.payload)
        },
        removeEvent(state, action) {

        },
        replaceEvents(state, action) {

        }
    }
});

export const eventsActions = eventsSlice.actions
export default eventsSlice.reducer;