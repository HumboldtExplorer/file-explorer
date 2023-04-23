import { FileExplorerFile } from "@/types/files"
import { Dispatch, SetStateAction } from "react"

interface SidebarProps {
    data: FileExplorerFile[],
    currentFolder?: FileExplorerFile|null|undefined,
    setCurrentFolder?: Dispatch<SetStateAction<FileExplorerFile | null | undefined>>
}

export { type SidebarProps }