import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Category from '../Layouts/Pages/Category/Category'
import Course from '../Layouts/Pages/Course/Course'
import CourseCategoryList from '../Layouts/Pages/CourseCategoryList/CourseCategoryList'
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
            element: <Home></Home>,
            loader: ()=> fetch('https://assignment-10-server-site.vercel.app/course')
           },
           {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`https://assignment-10-server-site.vercel.app/category/${params.id}`)
           },
           {
            path: '/course/:id',
            element: <Course></Course>,
            loader: ({params}) => fetch(`https://assignment-10-server-site.vercel.app/course/${params.id}`)
           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/register',
            element: <Register></Register>
           },
           {
            path: '/course',
            element: <CourseCategoryList></CourseCategoryList>
           },
        ]
    }
])