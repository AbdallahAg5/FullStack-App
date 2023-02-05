import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import PublicLayout from './components/PublicLayout'


const router=createBrowserRouter([
     {
        path:'/',
        element: <PublicLayout />,
        children:[
            {
              path:'/login',
              element: <Login />
            },
            {
              path:'/register',
              element: <Signup />
            }
        ]
     },
      {
        path:'/users',
        element: <Signup />
      },
      {
        path:'*',
        element: <NotFound />
      },
     
])


export default router