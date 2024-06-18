import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { useContext, useState } from 'react'
import googleIcon from '@src/assets/google.svg'
import microsoftIcon from '@src/assets/microsoft.svg'
import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { GlobalContext } from '@src/store/GlobalProvider'

interface IFormInput {
  email: string
  password: string
}

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formInput, setFormInput] = useState<IFormInput>({
    email: '',
    password: '',
  })

  const { dispatch } = useContext(GlobalContext)

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormInput((prev) => {
      return { ...prev, [id]: value }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formInput)
    dispatch({
      type: 'LOGIN',
      payload: {
        email: formInput.email,
        username: 'Huy Thai',
        sub: '123456789',
      },
    })
  }

  return (
    <div>
      <form className='mx-auto max-w-sm' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-sm text-gray-500 dark:text-gray-300'
          >
            Email
          </label>

          <div className='relative mt-2 flex items-center'>
            <span className='absolute'>
              <EnvelopeIcon className='mx-3 size-6 text-gray-400 dark:text-gray-500' />
            </span>

            <input
              type='email'
              id='email'
              className='block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-11 pr-5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rtl:pl-5 rtl:pr-11 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
              placeholder='email@example.com'
              required
              value={formInput.email}
              onChange={handleFormInput}
            />
          </div>
        </div>

        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <label
              htmlFor='password'
              className='block text-sm text-gray-500 dark:text-gray-300'
            >
              Mật khẩu
            </label>
            <a
              href='#'
              className='text-xs text-gray-600 hover:underline dark:text-gray-400'
            >
              Quên mật khẩu?
            </a>
          </div>

          <div className='relative mt-2 flex items-center'>
            <button
              onClick={() => setShowPassword(!showPassword)}
              type='button'
              className='absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto'
            >
              {showPassword ? (
                <EyeSlashIcon className='mx-4 size-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400' />
              ) : (
                <EyeIcon className='mx-4 size-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400' />
              )}
            </button>

            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              className='block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-5 pr-11 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rtl:pl-11 rtl:pr-5 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
              placeholder='**********'
              required
              value={formInput.password}
              onChange={handleFormInput}
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
        >
          Đăng nhập
        </button>

        <div className='mt-4 flex items-center justify-between'>
          <span className='w-1/5 border-b lg:w-1/5 dark:border-gray-600'></span>
          <a className='cursor-text select-none text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400'>
            with Social Media
          </a>
          <span className='w-1/5 border-b lg:w-1/5 dark:border-gray-400'></span>
        </div>

        <div className='mt-6 flex flex-col items-center gap-2'>
          <button
            type='button'
            className='mx-2 flex w-full transform items-center justify-center rounded-lg border-2 bg-white px-6 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none'
          >
            <img src={googleIcon} alt='google icon' className='size-6' />
            <span className='mx-2 hidden sm:inline'>Sign in with Google</span>
          </button>
          <button
            type='button'
            className='mx-2 flex w-full transform items-center justify-center rounded-lg border-2 bg-white px-6 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none'
          >
            <img src={microsoftIcon} alt='google icon' className='size-6' />
            <span className='mx-2 hidden sm:inline'>
              Sign in with Microsoft
            </span>
          </button>
        </div>

        <p className='mt-8 text-center text-sm font-light text-gray-400'>
          Bạn chưa có tài khoản?{' '}
          <Link
            to='/signup'
            className='font-medium text-gray-700 hover:underline dark:text-gray-200'
          >
            Đăng ký
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
