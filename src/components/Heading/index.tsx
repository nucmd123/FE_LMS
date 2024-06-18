import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import canvasLogo from '@src/assets/canvas-logo.svg'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import { useContext } from 'react'
import { GlobalContext } from '@src/store/GlobalProvider'

function Heading() {
  const { state } = useContext(GlobalContext)

  return (
    <div className='flex h-20 items-center justify-between gap-5 px-6 shadow'>
      <Link to='/' className='block h-9'>
        <img
          src={canvasLogo}
          alt='logo'
          className='h-full w-full rounded-lg object-contain'
        />
      </Link>
      <div className='flex h-full cursor-pointer items-center text-lg font-medium'>
        Danh mục
      </div>
      <div className='relative flex flex-grow items-center'>
        <input
          type='text'
          className='block flex-grow rounded-full border border-gray-300 bg-gray-50 p-3 pl-12 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Tìm kiếm ...'
          required
        />
        <button className='absolute left-3'>
          <MagnifyingGlassIcon className='size-7 text-gray-500' />
        </button>
      </div>
      <div className='flex h-full items-center'>
        {state.auth?.isAuthenticated ? (
          <div className='h-full'>
            <Avatar />
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <Link
              to={'/login'}
              type='button'
              className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
            >
              Đăng nhập
            </Link>
            <Link
              to={'/signup'}
              type='button'
              className='rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
            >
              Đăng ký
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Heading
