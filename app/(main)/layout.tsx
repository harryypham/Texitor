"use client"

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) =>  {
    const {isAuthenticated, isLoading} = useConvexAuth();
    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                Loading
            </div>
        )
    }

    if (!isAuthenticated) {
        console.log('because of me')
        return redirect("/")
    }

    return (
        <div className="h-full flex">
            <Navigation />
            <main className="h-full flex-1 overflow-y-auto">
                {children}
            </main>    
        </div>
    )
}
export default MainLayout
