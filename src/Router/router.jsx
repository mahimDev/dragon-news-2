import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Categories from "../Pages/Categories/Categories";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Res/Register";
import NewsDetails from "../Pages/News/NewsDetails";
import PrivateRoute from "../Provider/Private/PrivateRoute";


const router = createBrowserRouter([

    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={`/categories/01`}></Navigate>
            },

            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/news/:id',
        element:
            // <PrivateRoute>
            <NewsDetails></NewsDetails>,
        // </PrivateRoute>
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    }
])

export default router;