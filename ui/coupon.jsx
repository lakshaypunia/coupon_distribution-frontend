"use client"
import { useState } from "react";
import { Check, Copy } from "lucide-react"


const Coupon = ({coupon}) => {

  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coupon)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="flex items-center justify-center min-h-[300px] w-full bg-indigo-950 p-8">
        
      <div className="relative w-full max-w-2xl">
        {/* Decorative elements */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-pink-500 rounded-md"></div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400 rounded-full"></div>

        {/* Clock container */}
        <div className="relative flex flex-col h-48  bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 rounded-lg p-8 shadow-2xl z-10">
            <div className="w-full text-5xl font-bold flex items-center justify-center">🎉COUPON CODE🎉</div>
            <div className="flex justify-center items-center space-x-2">
            <div className="bg-muted text-3xl px-4 py-3 rounded-md font-mono font-bold tracking-wider">{coupon}</div>
            <button onClick={copyToClipboard} className="flex items-center gap-1 cursor-pointer">
              {copied ? (
                <>
                  <Check className="h-6 w-6" />
                  <span className="sr-only">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-6 w-6" />
                  <span className="sr-only">Copy code</span>
                </>
              )}
            </button>
            </div>
          </div>
            
        </div>
      </div>
  )
}

export default Coupon