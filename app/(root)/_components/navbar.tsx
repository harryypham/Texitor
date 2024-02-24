"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"

export const Navbar = () => {
    return (
        <div className="z-50 w-full bg-background fixed top-0 flex items-center justify-between p-6">
            <div className="text-2xl font-semibold pl-6">Notion</div>
            <div className="hidden md:justify-center w-full left-[-5px] md:flex absolute  gap-x-6 text-sm">
                <div>Products</div>
                <div>Resource</div>
                <div>Use cases</div>
                <div>Contact</div>
                <div>Pricing</div>
            </div>
            <div className="md:ml-auto justify-end w-full flex items-center gap-x-5">
                <div className="text-sm">Login</div>
                <Button className="">Sign up</Button>
            </div>
        </div>
    )
}