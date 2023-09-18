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
      state.bookedEvents = action.payload;
    },
    addEvent(state, action) {
      for (const i in state.bookedEvents) {
          console.log(i)
        }

      // const bookedEventsObj = Object.entries(current(state.bookedEvents));
      // const bookedEvents = [];

      // for (const i in bookedEventsObj) {
      //   bookedEvents[i] = bookedEventsObj[i][1];
      // }

      // const existingBookedEventIndex = bookedEvents.findIndex(
      //   (event) => event.name === action.payload.name
      // );

      // const existingCartItem = bookedEvents[existingBookedEventIndex]

      // if (existingCartItem) {
      //   alert("This event has already been booked")
      // } else {
      //   bookedEvents.push(action.payload)
      //   state.bookedEvents = bookedEvents
      // }
    },
    removeEvent(state, action) {
      console.log(action.payload)
      console.log(Object.entries(state.bookedEvents))
      // const bookedEventsObj = Object.entries(current(state.bookedEvents));
      // const bookedEvents = [];

      // for (const i in bookedEventsObj) {
      //   bookedEvents[i] = bookedEventsObj[i][1];
      // }

      // const existingBookedEventIndex = bookedEvents.findIndex(
      //   (event) => event.name === action.payload.name
      // );

      // bookedEvents.splice(existingBookedEventIndex, 1);
      // state.bookedEvents = bookedEvents
      // console.log(current(state.bookedEvents))
    },
  },
});

export const bookedEventsActions = bookedEventsSlice.actions;
export default bookedEventsSlice.reducer;
