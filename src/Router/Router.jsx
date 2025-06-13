import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";
import EventManage from "../Pages/EventManage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "/",
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
                path:"/eventmanage",
                Component:EventManage
            }
        ]

    },
]);

export default router;