import { useState } from 'react'
import './index.css'

const _pendingRoll = 5

function SquareRow() {
  const [pendingRoll /* setPendingRoll */] = useState<number>(_pendingRoll)
  const [isRolling /* setIsRolling */] = useState<boolean>(false)

  // const randomRange = () => {
  //   const min = 3000
  //   const max = 6000
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  return (
    <div
      className='wheel relative mx-auto mt-4 bg-gray-300'
      style={{
        backgroundPosition: `${isRolling ? `0px center` : '600px center'}`,
      }}
    >
      <div
        className={`wheel__marker wheel__item absolute -bottom-3 -top-3 w-1 rounded bg-red-500`}
      ></div>
      <div
        className={`wheel__mask wheel__item wheel__item--visible absolute left-0 top-0 z-10 size-full`}
      ></div>
      <div
        className={`wheel__item wheel__item--visible absolute z-20 flex size-full items-center justify-center`}
      >
        <div className='text-center uppercase tracking-wide text-white'>
          <p className='mb-1 text-white'>rolling</p>
          <p className='text-2xl font-bold tabular-nums'>{pendingRoll}</p>
        </div>
      </div>
    </div>
  )
}

export default SquareRow
