import avatarImg from '@src/assets/react.svg'
import { GlobalContext } from '@src/store/GlobalProvider'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Avatar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <div
      className='relative flex h-full items-center'
      onClick={() => setIsOpen(!isOpen)}
    >
      <img
        className='size-10 rounded-full p-1 ring-2 ring-green-500 dark:ring-gray-500'
        src={avatarImg}
        alt='user avatar'
      />

      {isOpen && (
        <ul className='absolute right-0 top-full z-10 w-44 rounded-lg border-2 border-solid border-gray-100'>
          <li className='p-3'>
            <div className='border-b pb-1 font-medium'>
              {state.auth?.user?.username}
            </div>
          </li>
          <Link to='#'>
            <li className='avatar_dropdown_item p-3'>Cài đặt</li>
          </Link>
          <Link to='#'>
            <li
              className='avatar_dropdown_item p-3'
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              Đăng xuất
            </li>
          </Link>
        </ul>
      )}
    </div>
  )
}

export default Avatar
