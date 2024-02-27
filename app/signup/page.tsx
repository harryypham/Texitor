import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserAuthForm } from "@/app/signup/_components/user-auth-form"




export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
        <div className="">
            <div className="container max-h-screen relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute right-4 top-4 md:right-8 md:top-8"
                )}
                >
                Login
                </Link>
                <div className="relative hidden h-full flex-col bg-black p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-login" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <Link href="/">Notion</Link>
                </div>
                
                </div>
                <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Privacy Policy
                    </Link>
                    .
                    </p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}