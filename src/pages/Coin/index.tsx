import React, { useState, useEffect } from 'react'
import './index.css'

const _timeLeft = 15

const getRandomPosition = () => Math.floor(Math.random() * (6000 - 3000 + 1))

// Hàm easing để tạo hiệu ứng chuyển động mượt mà
const easeOutQuad = (t: number) => t * (2 - t)

const CoinBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(_timeLeft)
  const [backgroundPosition, setBackgroundPosition] = useState(6000)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [])

  useEffect(() => {
    if (timeLeft === 0) {
      const randomPosition = getRandomPosition()
      const animationDuration = 2000 // thời gian animation trong 2 giây
      const intervalDuration = 10 // mỗi 10ms sẽ update vị trí một lần
      const totalSteps = animationDuration / intervalDuration
      const startPosition = 6000

      let currentStep = 0
      const animateBackground = setInterval(() => {
        currentStep++
        const progress = currentStep / totalSteps
        const easedProgress = easeOutQuad(progress)
        setBackgroundPosition(
          startPosition + (randomPosition - startPosition) * easedProgress,
        )

        if (currentStep >= totalSteps) {
          clearInterval(animateBackground)
          setBackgroundPosition(randomPosition)
        }
      }, intervalDuration)

      return () => clearInterval(animateBackground)
    }
  }, [timeLeft])

  return (
    <div className=''>
      <div className='coin-timer flex flex-col justify-center'>
        <p>rolling</p>
        <p className='text-2xl font-bold tabular-nums'>{timeLeft}</p>
      </div>
      <div
        className='coin-banner relative'
        style={{
          backgroundPosition: `${backgroundPosition}px center`,
          transition: 'none 0s ease 0s',
        }}
      >
        <div className='coin-mask'></div>
      </div>
    </div>
  )
}

export default CoinBanner
