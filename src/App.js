// css 
import "./App.css";
// third party
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// local components from top level to deeply rooted
import AppRoot from "./routes/app_root/AppRoot";
import AppError from "./routes/error/AppError";
import HomePage from "./routes/home/HomePage";
import EventsHomePage from "./routes/events_pages/EventsHomePage";
import BookedEventsHomePage from "./routes/booked_events_pages/BookedEventsHomePage";
import LoginPage from "./routes/login/LoginPage";

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
          element: <EventsHomePage />,
        },
        {
          path: "booked-events",
          element: <BookedEventsHomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>

}

export default App;
