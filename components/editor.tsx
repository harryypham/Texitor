"use client"

import {
    BlockNoteEditor,
    PartialBlock
} from "@blocknote/core"

import {
    BlockNoteView,
    useCreateBlockNote,
} from "@blocknote/react"
import "@blocknote/core/style.css"

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

export const Editor = ({
    onChange,
    initialContent,
    editable
} : EditorProps) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined
    })

    return (
        <div>
            Editor
        </div>
    )
}