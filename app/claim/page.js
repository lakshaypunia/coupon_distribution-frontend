"use client"

import Clock_timer from "@/ui/clock-timer"
import Coupon from "@/ui/coupon"
import Loader from "@/ui/loader"
import { useEffect, useRef, useState } from "react"


export default function Claim(){
    const [data,setdata] = useState([])
    const [responseType, setResponseType] = useState("")
    const [loading, setLoading] = useState(false);
    const hasFetched = useRef(false);

    useEffect(() => {
        setLoading(true); 

    
      
      
        const fetch_data = async () => {
            if (data.coupon || hasFetched.current) return; 

            setLoading(true);
            hasFetched.current = true;
            const response = await fetch("http://localhost:3001/")
            const result = await response.json()
            if (result.remainingMinutes !== undefined && result.remainingSec !== undefined){
                setdata(result)
                setResponseType("timer")
            }
            else if (result.coupon !== undefined){
                setdata(result)
                setResponseType("coupon")
            }
            else{
                setdata(result)
                setResponseType("error")
            }
            setLoading(false)
            return result
            
        }
        fetch_data()
    },[])

    return (
        <div className="bg-indigo-950 h-dvh">

        {loading?(
            <div className="h-full flex items-center justify-center">
            <Loader size="xl" /></div>
        ) :  responseType === "timer" ? (
            <div>
                <div className="flex flex-col items-center justify-center min-h-[100px] w-full bg-indigo-950 p-8 space-y-4">
                    <div className="text-5xl text-center flex justify-center items-center font-bold">Coupon Redemption Limit Reached</div>
                    <div className="text-lg flex justify-center items-center">You can only redeem one coupon every hour.</div>
                </div>
                <Clock_timer remainingminutes={data.remainingMinutes} remainingseconds={data.remainingSec}/>
            </div>
            
        )
        :  responseType === "coupon"?(<div>
            <div className="flex flex-col items-center justify-center min-h-[100px] w-full bg-indigo-950 p-8 space-y-4">
                <div className="text-5xl text-center flex justify-center items-center font-bold">🎉 Congratulations! 🎉</div>
                <div className="text-lg flex justify-center items-center">You have successfully claimed your coupon.</div>
            </div>
            <Coupon coupon={data.coupon}/>
            <div className="text-md font-semibold text-center">*NOTE : You can claim your next coupon after 1 hour</div>
        </div>) : responseType ==="error"? (
            <div className="flex flex-col items-center justify-center h-full w-full bg-indigo-950 p-8 space-y-4">
            <div className="text-5xl text-center flex justify-center items-center font-bold">All coupons have been claimed!</div>
            <div className="text-lg flex justify-center items-center">all available coupons have already been distributed. Please check back later for new offers!"</div>
        </div>
        ) : (
            <div> </div>
        )}
        
        </div>
    )
    
}