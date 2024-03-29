"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4 z-10">
            <h1 className="font-semibold text-4xl py-2 font-guise sm:text-6xl md:text-7xl  sm:py-4">
            Write, plan, share documents <span className="doodle">with ease</span>
            </h1>
            <h3 className="text-base font-medium pb-4 mx-8 sm:px-16">Elevate your writing experience with our intuitive text editor. Effortlessly create and edit, embracing a world of limitless textual possibilities.</h3>
            <Button className="mt-6">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
            </Button>
        </div>
    )
}
