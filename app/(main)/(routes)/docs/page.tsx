"use client"

import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react"
import { toast } from "sonner"

import { PlusCircle } from "lucide-react"
import { api } from "@/convex/_generated/api"

const DocumentsPage = () => {
    const { user } = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title: "Untitled" })
        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note"
        })
    }

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s Texitor</h2>
            <Button onClick={onCreate}><PlusCircle className="h-4 w-4 mr-2"></PlusCircle>Create a note</Button>
        </div>
    )
}
export default DocumentsPage