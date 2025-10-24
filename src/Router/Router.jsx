import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";
import EventManage from "../Pages/CreateEvent";
import FeaturedEvents from "../Pages/FeaturedEvents";
import DetailsEvent from "../Pages/DetailsEvent";
import CreateEvent from "../Pages/CreateEvent";
import EventPages from "../Pages/EventPages";
import PrivateRoute from "../providers/PrivateRoute";
import MyEvents from "../Pages/MyEvents";
import UpdateEvents from "../Pages/UpdateEvents";
import MyBookings from "../Pages/MyBookings";
import NotFound from "../Pages/NotFound";
import ResetPassword from "../Components/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "/",
                loader: () => fetch(' https://eleventh-assignment-code-server.vercel.app/events'),
                Component: Home
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: SignIn
            },
            {
                path: "/createEvent",
                element: <PrivateRoute>
                    <CreateEvent></CreateEvent>
                </PrivateRoute>
            },
            {
                path: "/myevents",
                element: <PrivateRoute>
                    <MyEvents></MyEvents>
                </PrivateRoute>
            },

             {
                path: "/my-bookings",
                element: <PrivateRoute>
                   <MyBookings></MyBookings>
                </PrivateRoute>
            },
            {
                path: "/eventPage",
                loader: () => fetch(' https://eleventh-assignment-code-server.vercel.app/events'),
                Component: EventPages
            },
            {
                path: "/detailsEvent/:id",
                loader: ({ params }) => fetch(` https://eleventh-assignment-code-server.vercel.app/events/${params.id}`),
                Component: DetailsEvent
            },
            {
                path: "/update-events/:id",
                loader: ({ params }) => fetch(`https://eleventh-assignment-code-server.vercel.app/events/${params.id}`),
                element: <PrivateRoute>
                    <UpdateEvents></UpdateEvents>
                </PrivateRoute>
            },
            {
                path: "/*",
                Component:NotFound
            },
            {
                path:"/reset-password",
                Component:ResetPassword
            }
        ]

    },
]);

export default router;