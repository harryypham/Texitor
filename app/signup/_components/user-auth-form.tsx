"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

import { useState } from "react";
import { useUser } from "@clerk/nextjs"
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { isLoaded, signUp, setActive } = useSignUp();
  const {user} = useUser();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [file, setFile] = useState<File | null>(null);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName
      });
 
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      setIsLoading(false);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        console.log("Sign Up Success")
        if (file) {
          console.log("file uploaded")
          user?.setProfileImage({file: file}).then((value) => {
            console.log(value)
          })
        }
        
        
        router.push("/docs")
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {!pendingVerification && (
        <div className="space-y-6">
          <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
          </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <div className="flex gap-x-4">
                <div className="grid gap-1">
                  <Label className="" htmlFor="firstname">
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="" htmlFor="lastname">
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-1">
                <Label className="" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="grid gap-1">
                <Label className="" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-1">
                <Label className="" htmlFor="picture">
                  Profile Image
                </Label>
                <Input
                  id="picture"
                  disabled={isLoading}
                  type="file"
                  onChange={handleFileUpload}
                />
              </div>
              <Button className="mt-4" disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign Up with Email
              </Button>
            </div>
          </form>
        </div>
      )}
      {pendingVerification && (
        <div>
          <form>
            <p>We sent a code to <span className="font-semibold">{emailAddress}</span></p>
            <div className="flex mt-4 gap-x-3">
              <Input
                id="code"
                value={code}
                placeholder="Code..."
                onChange={(e) => setCode(e.target.value)}
              />
              {!isLoading && (
              <Button onClick={onPressVerify}>
                Verify email
              </Button>
              )}
              {isLoading && (
                <Button>
                  Loading
              </Button>
              )}
            </div>
          </form>
        </div>
      )}
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button> */}
    </div>
  )
}