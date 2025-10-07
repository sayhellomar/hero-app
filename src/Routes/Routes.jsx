import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installation',
                Component: Installation
            },
            {
                path: 'app/:id',
                Component: AppsDetails
            }
        ]
    }
]);

export default router;