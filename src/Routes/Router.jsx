import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Menu/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Home from "../Pages/Home/Home";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/projects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/allblogs',
                element: <AllBlogs></AllBlogs>
            },
        ]
    },
   
])
export default router;