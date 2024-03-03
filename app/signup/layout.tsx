"use client"
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Lottie from "lottie-react"
import loadingAnimation from "@/public/loading.json"

const Layout = ({children} : {children: React.ReactNode;}) => {
    const {isAuthenticated, isLoading} = useConvexAuth()
    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Lottie animationData={loadingAnimation} loop={true} className="w-[100px]"></Lottie>
            </div>
        )
    }
    if (isAuthenticated) {
        redirect("/docs")
    }
    
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout