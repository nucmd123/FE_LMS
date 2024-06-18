import { Navigate, Outlet } from 'react-router-dom'
import Heading from '../../components/Heading'
import { useContext } from 'react'
import { GlobalContext } from '@src/store/GlobalProvider'

function Auth() {
  const { state } = useContext(GlobalContext)

  if (state.auth?.isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Heading />
      <div className='container mx-auto py-8'>
        <Outlet />
      </div>
    </>
  )
}

export default Auth
