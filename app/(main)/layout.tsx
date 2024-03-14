"use client"

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/loading.json"
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) =>  {
    const {isAuthenticated, isLoading} = useConvexAuth();
    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Lottie animationData={loadingAnimation} loop={true} className="w-[100px]"></Lottie>
            </div>
        )
    }

    if (!isLoading && !isAuthenticated) {
        return redirect("/")
    }

    return (
        <div className="h-full flex">
            <Navigation />
            <main className="h-full flex-1 overflow-y-auto">
                <SearchCommand />
                {children}
            </main>    
        </div>
    )
}
export default MainLayout
