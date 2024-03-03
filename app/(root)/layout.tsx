"use client"

import { Navbar } from "./_components/navbar";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const Layout = ({children} : {children: React.ReactNode;}) => {
    const {isAuthenticated, isLoading} = useConvexAuth()
    if (isAuthenticated) {
        redirect("/docs")
    }
    
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}
export default Layout