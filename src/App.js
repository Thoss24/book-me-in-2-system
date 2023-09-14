// css
import "./App.css";
// third party
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// local components from top level to deeply rooted
import AppRoot from "./routes/app_root/AppRoot";
import AppError from "./routes/error/AppError";
import HomePage from "./routes/home/HomePage";
import EventsHomePage, {
  loader as eventsLoader,
} from "./routes/events_pages/EventsHomePage";
import BookedEventsHomePage from "./routes/booked_events_pages/BookedEventsHomePage";
import EventDetailPage, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from "./routes/events_pages/EventDetailPage";
import EventsRoot from "./routes/events_root/EventsRoot";
import NewEventPage from "./routes/events_pages/NewEventPage";
import EditEventPage from "./routes/events_pages/EditEventPage";
import { action as manipulateEventAction } from "./utility/manipulate-event-actions";
import BookedEventDetailPage from "./routes/booked_events_pages/BookedEventDetailPage";
import BookedEventsRoot from "./routes/booked_events_pages/BookedEventsRoot";
import CalenderPage from "./routes/calender_pages/CalenderPage";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      errorElement: <AppError />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsHomePage />,
              loader: eventsLoader,
            },
            {
              id: "events-details",
              path: ":eventId",
              loader: eventDetailsLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ],
            },
            {
              path: "new-event",
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
          ],
        },
        {
          path: "booked-events",
          element: <BookedEventsRoot />,
          children: [
            {
              index: true,
              element: <BookedEventsHomePage />,
            },
            {
              path: "booked-event-details",
              element: <BookedEventDetailPage />,
            },
            {
              path: "calender",
              element: <CalenderPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
