"use client"
import { useRouter } from "next/navigation"




export default function Home() {

  const router = useRouter();
  
  
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 font-mono bg-indigo-950">

      <h1 className="text-5xl font-mono font-bold">🎉Welcome to the Coupon Distribution System🎉</h1>
      <p>Click the button below to claim your coupon. Coupons are assigned in a round-robin manner, ensuring fair distribution.
      To prevent multiple claims, there are restrictions in place.</p>
      <button onClick={ () => {
        router.push("/claim")
      }} className="h-16 w-48 rounded-xl  border-blue-500 hover:bg-white bg-blue-500 cursor-pointer hover:text-gray-700">Claim Your Coupon</button>
    </div>


  )
  };