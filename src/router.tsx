import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Auth from './pages/Auth'
import CoinBanner from './pages/Coin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'coin',
        element: <CoinBanner />,
      },
    ],
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
