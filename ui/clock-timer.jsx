"use client"

import { useState, useEffect } from "react"



export default function Clock_timer({remainingminutes, remainingseconds}) {
  // Calculate total seconds for the countdown
  const calculateTotalSeconds = (h, m, s) => {
    return h * 3600 + m * 60 + s
  }

  const [totalSeconds, setTotalSeconds] = useState(calculateTotalSeconds(0,remainingminutes, remainingseconds))

  useEffect(() => {
    if (totalSeconds > 0) {
      const interval = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            onComplete?.()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [totalSeconds])

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const formattedHours = hours.toString().padStart(2, "0")
  const formattedMinutes = minutes.toString().padStart(2, "0")
  const formattedSeconds = seconds.toString().padStart(2, "0")

  return (
    <div className="flex items-center justify-center min-h-[300px] w-full bg-indigo-950 p-8">
        
      <div className="relative w-full max-w-2xl">
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-pink-500 rounded-md"></div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400 rounded-full"></div>

        <div className="relative flex flex-col  bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 rounded-lg p-8 shadow-2xl z-10">
            <div className="w-full flex items-center justify-center">Time Remaining for Next Coupon</div>
        <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-white text-6xl font-bold tracking-wider">{formattedHours}</span>
              <span className="text-gray-300 text-xs mt-1 tracking-widest">HOURS</span>
            </div>

            <div className="text-white text-6xl font-light pb-6">:</div>

            <div className="flex flex-col items-center">
              <span className="text-white text-6xl font-bold tracking-wider">{formattedMinutes}</span>
              <span className="text-gray-300 text-xs mt-1 tracking-widest">MINS</span>
            </div>

            <div className="text-white text-6xl font-light pb-6">:</div>

            <div className="flex flex-col items-center">
              <span className="text-white text-6xl font-bold tracking-wider">{formattedSeconds}</span>
              <span className="text-gray-300 text-xs mt-1 tracking-widest">SEC</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}