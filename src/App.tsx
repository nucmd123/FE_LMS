import { Outlet } from 'react-router-dom'
import Heading from './components/Heading'

function App() {
  return (
    <>
      <Heading />
      <div className='container mx-auto py-8'>
        <Outlet />
      </div>
    </>
  )
}

export default App
