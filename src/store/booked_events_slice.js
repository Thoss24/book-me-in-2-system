import { createSlice, current } from "@reduxjs/toolkit";

const defaultBookedEventsState = {
  bookedEvents: [],
  numberOfBookedEvents: 0,
};

const bookedEventsSlice = createSlice({
  name: "booked-events",
  initialState: defaultBookedEventsState,
  reducers: {
    replaceBookedEvents(state, action) {
        console.log(typeof action.payload)
      state.bookedEvents = action.payload;
      console.log(state.bookedEvents)
    },
    addEvent(state, action) {
        // console.log("before", current(state.bookedEvents))
        // state.bookedEvents.push({name: "test"})
        // console.log("after", current(state.bookedEvents))


      const bookedEventsObj = Object.entries(current(state.bookedEvents));
      const bookedEvents = [];
      for (const i in bookedEventsObj) {
        //console.log(bookedEventsObj[i][1])
        bookedEvents[i] = bookedEventsObj[i][1];
      }
      const existingBookedEventIndex = bookedEvents.findIndex(
        (event) => event.name === action.payload.name
      );
      const existingCartItem = bookedEvents[existingBookedEventIndex]
      if (existingCartItem) {
        alert("This event has already been booked")
      }
    },
    removeEvent(state, action) {},
  },
});

export const bookedEventsActions = bookedEventsSlice.actions;
export default bookedEventsSlice.reducer;
