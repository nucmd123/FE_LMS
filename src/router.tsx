import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Auth from './pages/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
])

export default router
