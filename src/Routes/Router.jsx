import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Menu/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllBlogs from "../Pages/Dashboard/AllBlogs/AllBlogs";
import DashboardLayout from "../layout/Menu/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllProjects from "../Pages/Dashboard/AllProjects";
import Experience from "../Pages/Dashboard/Experience";
import AllEducation from "../Pages/Dashboard/AllEducation";
import AllContact from "../Pages/Dashboard/AllContact";
import Overview from "../Pages/Dashboard/Overview";
import AllBanner from "../Pages/Dashboard/AllBanner";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
    {
        path: '/admin',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/admin',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/admin/overview',
                element: <Overview></Overview>
            },
            {
                path: '/admin/blogs-all',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: '/admin/project-all',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/admin/experience-all',
                element: <Experience></Experience>
            },
            {
                path: '/admin/education-all',
                element: <AllEducation></AllEducation>
            },
            {
                path: '/admin/contact-all',
                element: <AllContact></AllContact>
            },
            {
                path: '/admin/banner-all',
                element: <AllBanner></AllBanner>
            },
        ]
    }
   
])
export default router;