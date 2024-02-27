"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils"

export const Navbar = () => {
    return (
        <div className="z-50 w-full bg-background fixed top-0 flex items-center justify-between p-6">
            <div className="text-2xl font-semibold pl-6 cursor-pointer z-50">Notion</div>
            <div className="hidden md:justify-center w-full left-[-5px] md:flex absolute  gap-x-6 text-sm">
                <div><a href="">Products</a></div>
                <div><a href="">Resource</a></div>
                <div><a href="">Use cases</a></div>
                <div><a href="">Contact</a></div>
                <div><a href="">Pricing</a></div>
            </div>
            <div className="md:ml-auto justify-end flex items-center gap-x-5 z-50">
                <div className="text-sm"><a href="/login">Login</a></div>
                <Link href="/signup"><Button className="">Sign up</Button></Link>
            </div>
        </div>
    )
}