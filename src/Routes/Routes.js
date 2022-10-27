import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import CourseBlog from '../Layouts/Pages/Blog/CourseBlog'
import Category from '../Layouts/Pages/Category/Category'
import Course from '../Layouts/Pages/Course/Course'
import CourseCategoryList from '../Layouts/Pages/CourseCategoryList/CourseCategoryList'
import ErrorPage from '../Layouts/Pages/ErrorPage/ErrorPage'
import CourseFaq from '../Layouts/Pages/Faq/CourseFaq'
import Header from '../Layouts/Pages/Header/Header'
import Home from '../Layouts/Pages/Home/Home'
import Login from '../Layouts/Pages/Login/Login'
import Register from '../Layouts/Pages/Login/Register'
import PremiumCourse from '../Layouts/Pages/Premium/PremiumCourse'
import PrivateRoute from './PrivateRoute'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>

    },
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
           {
            path: '/course',
            element: <Home></Home>,
            loader: ()=> fetch('https://assignment-10-server-site.vercel.app/course-categories ')
           },
           {
            path: '/category/:id',
            element: <PrivateRoute><Category></Category></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-10-server-site.vercel.app/category/${params.id}`)
           },
           {
            path: '/course/:id',
            element: <PrivateRoute><Course></Course></PrivateRoute>,
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
        //    {
        //     path: '/course',
        //     element: <PrivateRoute><CourseCategoryList></CourseCategoryList></PrivateRoute>
        //    },
           {
            path: '/get-premium',
            element: <PremiumCourse></PremiumCourse>
           },
           {
            path: '/blog',
            element: <CourseBlog></CourseBlog>
           },
           {
            path: '/faq',
            element: <CourseFaq></CourseFaq>
           }
        ]
    }
])