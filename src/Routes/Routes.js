
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Category from '../Layouts/Pages/Category/Category'
import Course from '../Layouts/Pages/Course/Course'
import Home from '../Layouts/Pages/Home/Home'
import Login from '../Layouts/Pages/Login/Login'
import Register from '../Layouts/Pages/Login/Register'
import PrivateRoute from './PrivateRoute'




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/category/:id',
            element: <Category></Category>
           },
           {
            path: '/course/:id',
            element: <PrivateRoute><Course></Course></PrivateRoute>
           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/register',
            element: <Register></Register>
           }
        ]
    }
])