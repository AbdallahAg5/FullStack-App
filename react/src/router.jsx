import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import PublicLayout from './components/PublicLayout'
import UserLayout from './components/UserLayout'
import Users from './pages/Users'
import UserForm from './pages/UserForm'


const router=createBrowserRouter([
     {
        path:'/',
        element: <PublicLayout />,
        children:[
            {
              path:'/',
              element: <Login />
            },
            {
              path:'/register',
              element: <Signup />
            }
        ]
     },
     {
        path:'/',
        element: <UserLayout />,
        children: [
          {
            path:'/users',
            element: <Users />
          },
          {
            path:'/user/new',
            element:<UserForm key='addUser' />
          },
          {
            path:'/user/:id',
            element:<UserForm key='updateUser' />
          } 
        ] 
      },
      {
        path:'*',
        element: <NotFound />
      },
     
])


export default router