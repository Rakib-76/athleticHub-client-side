import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";
import EventManage from "../Pages/EventManage";
import FeaturedEvents from "../Pages/FeaturedEvents";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:3000/events'),
                Component: Home
            },
            // {
            //     path: '/events',
            //     loader: () => fetch('http://localhost:3000/events'),
            //     Component: FeaturedEvents
            // },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: SignIn
            },
            {
                path: "/eventmanage",
                Component: EventManage
            }
        ]

    },
]);

export default router;